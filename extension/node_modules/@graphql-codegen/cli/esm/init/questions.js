import { grey } from './helpers.js';
import { plugins } from './plugins.js';
import { Tags } from './types.js';
export function getQuestions(possibleTargets) {
    return [
        {
            type: 'list',
            name: 'targets',
            message: `What type of application are you building?`,
            choices: getApplicationTypeChoices(possibleTargets),
            validate: ((targets) => targets.length > 0),
            default: getApplicationTypeChoices(possibleTargets).findIndex(c => c.checked),
        },
        {
            type: 'input',
            name: 'schema',
            message: 'Where is your schema?:',
            suffix: grey(' (path or url)'),
            default: 'http://localhost:4000', // matches Apollo Server's default
            validate: (str) => str.length > 0,
        },
        {
            type: 'input',
            name: 'documents',
            message: 'Where are your operations and fragments?:',
            when: answers => {
                // flatten targets
                // I can't find an API in Inquirer that would do that
                answers.targets = normalizeTargets(answers.targets);
                return (answers.targets.includes(Tags.client) ||
                    answers.targets.includes(Tags.angular) ||
                    answers.targets.includes(Tags.stencil));
            },
            default: getDocumentsDefaultValue,
            validate: (str) => str.length > 0,
        },
        {
            type: 'checkbox',
            name: 'plugins',
            when: answers => {
                // flatten targets
                // I can't find an API in Inquirer that would do that
                answers.targets = normalizeTargets(answers.targets);
                return !answers.targets.includes(Tags.client);
            },
            message: 'Pick plugins:',
            choices: getPluginChoices,
            validate: ((plugins) => plugins.length > 0),
        },
        {
            type: 'input',
            name: 'output',
            message: 'Where to write the output:',
            default: getOutputDefaultValue,
            validate: (str) => str.length > 0,
        },
        {
            type: 'confirm',
            name: 'introspection',
            default: false,
            message: 'Do you want to generate an introspection file?',
        },
        {
            type: 'input',
            name: 'config',
            message: 'How to name the config file?',
            default: answers => answers.targets.includes(Tags.client) ||
                answers.targets.includes(Tags.typescript) ||
                answers.targets.includes(Tags.angular)
                ? 'codegen.ts'
                : 'codegen.yml',
            validate: (str) => {
                const isNotEmpty = str.length > 0;
                const hasCorrectExtension = ['json', 'yml', 'yaml', 'js', 'ts'].some(ext => str.toLocaleLowerCase().endsWith(`.${ext}`));
                return isNotEmpty && hasCorrectExtension;
            },
        },
        {
            type: 'input',
            name: 'script',
            default: 'codegen',
            message: 'What script in package.json should run the codegen?',
            validate: (str) => str.length > 0,
        },
    ];
}
export function getApplicationTypeChoices(possibleTargets) {
    function withFlowOrTypescript(tags) {
        if (possibleTargets.TypeScript) {
            tags.push(Tags.typescript);
        }
        else if (possibleTargets.Flow) {
            tags.push(Tags.flow);
        }
        else if (possibleTargets.Node) {
            tags.push(Tags.typescript, Tags.flow);
        }
        return tags;
    }
    return [
        {
            name: 'Backend - API or server',
            key: 'backend',
            value: withFlowOrTypescript([Tags.node]),
            checked: possibleTargets.Node,
        },
        {
            name: 'Application built with Angular',
            key: 'angular',
            value: [Tags.angular],
            checked: possibleTargets.Angular,
        },
        {
            name: 'Application built with React',
            key: 'react',
            value: withFlowOrTypescript([Tags.react, Tags.client]),
            checked: possibleTargets.React,
        },
        {
            name: 'Application built with Stencil',
            key: 'stencil',
            value: [Tags.stencil, Tags.typescript],
            checked: possibleTargets.Stencil,
        },
        {
            name: 'Application built with Vue',
            key: 'vue',
            value: [Tags.vue, Tags.client],
            checked: possibleTargets.Vue,
        },
        {
            name: 'Application using graphql-request',
            key: 'graphqlRequest',
            value: [Tags.graphqlRequest, Tags.client],
            checked: possibleTargets.graphqlRequest,
        },
        {
            name: 'Application built with other framework or vanilla JS',
            key: 'client',
            value: [Tags.typescript, Tags.flow],
            checked: possibleTargets.Browser && !possibleTargets.Angular && !possibleTargets.React && !possibleTargets.Stencil,
        },
    ];
}
export function getPluginChoices(answers) {
    return plugins
        .filter(p => p.available(answers.targets))
        .map(p => {
        return {
            name: p.name,
            value: p,
            checked: p.shouldBeSelected(answers.targets),
        };
    });
}
function normalizeTargets(targets) {
    return [].concat(...targets);
}
export function getOutputDefaultValue(answers) {
    if (answers.targets.includes(Tags.client)) {
        return 'src/gql/';
    }
    if (answers.plugins.some(plugin => plugin.defaultExtension === '.tsx')) {
        return 'src/generated/graphql.tsx';
    }
    if (answers.plugins.some(plugin => plugin.defaultExtension === '.ts')) {
        return 'src/generated/graphql.ts';
    }
    return 'src/generated/graphql.js';
}
export function getDocumentsDefaultValue(answers) {
    if (answers.targets.includes(Tags.vue)) {
        return 'src/**/*.vue';
    }
    if (answers.targets.includes(Tags.angular)) {
        return 'src/**/*.ts';
    }
    if (answers.targets.includes(Tags.client)) {
        return 'src/**/*.tsx';
    }
    return 'src/**/*.graphql';
}
