import { exec } from "child_process";
import fs from "fs/promises";

// Install the GraphQL extension for VS Code
exec(
  "code --install-extension GraphQL.vscode-graphql",
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing extension: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Installation stderr: ${stderr}`);
    } else {
      console.log(stdout);
    }
  }
);

// GraphQL configuration content
const ymlContent = `
schema: 'schema.graphql'
documents: '**/*.{graphql,js,ts,jsx,tsx}'
`;

// Write the configuration file
await fs.writeFile(`${process.cwd()}/.graphqlrc.yml`, ymlContent, (err) => {
  if (err) {
    console.error(`Error writing .graphqlrc.yml: ${err.message}`);
  } else {
    console.log(".graphqlrc.yml created successfully.");
  }
});
