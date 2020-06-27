// Call inquirer package
const fs = require("fs");
const inquirer = require("inquirer");

// Create Questions Object for Inquirer
const prompts = [
  {
    type: "input",
    name: "projectName",
    message: "Please give this project a name: ",
  },
  {
    type: "input",
    name: "projectDesc",
    message: "Please describe this project: ",
  },
  {
    type: "input",
    name: "projectInstall",
    message: "How does a user install this project? ",
  },
  {
    type: "input",
    name: "projectUse",
    message: "How does a user use this app? ",
  },
  {
    type: "input",
    name: "projectLicense",
    message:
      'Please write which license you want to use for this project (type "none" if no license): ',
  },
  {
    type: "input",
    name: "githubName",
    message: "What is your github name? ",
  },
  {
    type: "input",
    name: "projectTest",
    message:
      "How would a user report an issue or make contributions to this project?",
  },
];

async function append() {
  await inquirer.prompt(prompts).then((response) => {
    fs.appendFileSync("README.md", "# " + response.projectName + "\n");

    fs.appendFileSync(
      "README.md",
      "## Description " + "\n" + response.projectDesc + "\n"
    );

    fs.appendFileSync(
      "README.md",
      "### How to Install " + "\n" + response.projectInstall + "\n"
    );

    fs.appendFileSync(
      "README.md",
      "### How to Use " + "\n" + response.projectUse + "\n"
    );

    fs.appendFileSync(
      "README.md",
      "### Licenses " + "\n" + response.projectLicense + "\n"
    );

    fs.appendFileSync(
      "README.md",
      "### Contributors " + "\n" + response.githubName + "\n"
    );

    fs.appendFileSync(
      "README.md",
      "### For Error Reporting & Contributions " +
        "\n" +
        response.projectTest +
        "\n"
    );
  });
}

append();
