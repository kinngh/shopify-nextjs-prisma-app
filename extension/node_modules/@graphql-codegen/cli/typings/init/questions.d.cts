import inquirer from 'inquirer';
import { Answers, Tags } from './types.cjs';
export declare function getQuestions(possibleTargets: Record<Tags, boolean>): inquirer.QuestionCollection;
export declare function getApplicationTypeChoices(possibleTargets: Record<Tags, boolean>): {
    name: string;
    key: string;
    value: Tags[];
    checked: boolean;
}[];
export declare function getPluginChoices(answers: Answers): inquirer.DistinctChoice<inquirer.AllChoiceMap<inquirer.Answers>, inquirer.AllChoiceMap<inquirer.AllChoiceMap<inquirer.Answers>>>[];
export declare function getOutputDefaultValue(answers: Answers): "src/gql/" | "src/generated/graphql.tsx" | "src/generated/graphql.ts" | "src/generated/graphql.cjs";
export declare function getDocumentsDefaultValue(answers: Answers): "src/**/*.vue" | "src/**/*.ts" | "src/**/*.tsx" | "src/**/*.graphql";
