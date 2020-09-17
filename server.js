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
    name: "projectContributors",
    message: "Who contributed to this project? ",
  },
  {
    type: "input",
    name: "projectDemo",
    message: "Please enter in the live demo link: ",
  },
  {
    type: "input",
    name: "projectTech",
    message:
      'Please write which license you want to use for this project (type "none" if no license): ',
  },
  {
    type: "input",
    name: "projectDev",
    message: "Please Enter Future Development: ",
  },
];

async function append() {
  await inquirer.prompt(prompts).then((response) => {
    fs.appendFileSync("README.md", "# " + response.projectName + "\n");

    fs.appendFileSync(
      "README.md",
      "## Description " + "\n" + "-" + response.projectDesc + "\n"
    );

    fs.appendFileSync(
      "README.md",
      "### Contributors " + "\n" + "-" + response.projectContributors + "\n"
    );

    fs.appendFileSync(
      "README.md",
      "### Demo " + "\n" + "(" + response.projectDemo + ")" + "\n"
    );

    fs.appendFileSync(
      "README.md",
      "### Technologies Used " + "\n" + response.projectTech + "\n"
    );

    fs.appendFileSync(
      "README.md",
      "### Contributors " + "\n" + response.projectDev + "\n"
    );
  });
}

// Call the function to append to the ReadMe
append();
