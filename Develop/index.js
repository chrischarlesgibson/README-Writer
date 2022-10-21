// TODO: Include packages needed for this application import generate markdown using require

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input. put objects of questions in questions array and then put questions variable into inquier.prompt(question)
const questions = [
  {
    type: "input",
    message: "Enter project title",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of your project",
    name: "description",
  },
  {
    type: "confirm",
    message: "would you like a table of contents?",
    name: "TableOfContentsQuestion",
  },
  {
    type: "confirm",
    message: "would you to provide installation information?",
    name: "installationQuestion",
  },
  {
    type: "input",
    message: "provide installation instructions",
    name: "installation",
  },
  {
    type: "confirm",
    message: "would you to provide usage information?",
    name: "usageQuestion",
  },
  {
    type: "input",
    message: "Enter usage information",
    name: "usage",
  },
  {
    type: "confirm",
    message: "would you to provide and image or GIF for usage information?",
    name: "usageImageQuestion",
  },
  {
    type: "input",
    message: "Enter gif or image path or url",
    name: "usageImage",
  },
  {
    type: "input",
    message: "Enter credits",
    name: "credits",
  },

  {
    type: "list",
    message: "Enter license information",
    name: "license",
    choices: ["MIT", "Apache", "GPLv2", "GPLv3", "BSD 3-clause", "no license"],
  },
  {
    type: "input",
    message: "provide your github username",
    name: "username",
  },
  {
    type: "input",
    message: "provide your email",
    name: "email",
  },
  {
    type: "input",
    message: "provide your github repository name",
    name: "repoName",
  },

  {
    type: "list",
    message: "Enter badge to add",
    name: "badges",
    choices: [
      "Github Stats",
      "most used languages",
      "Contributors badges",
      "no badges",
    ],
  },
  {
    type: "confirm",
    message: "would you to provide features information?",
    name: "featuresQuestion",
  },
  {
    type: "input",
    message: "Enter features information",
    name: "features",
  },
  {
    type: "confirm",
    message: "would you to provide contributing information?",
    name: "contributingQuestion",
  },
  {
    type: "input",
    message: "Enter contributing information",
    name: "contributing",
  },
  {
    type: "confirm",
    message: "would you to provide testing information?",
    name: "testsQuestion",
  },
  {
    type: "input",
    message: "Enter tests",
    name: "tests",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log(
          "Success! Checkfor your README.md file in the folder that holds your index.js file "
        )
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    let storedUserInput = generateMarkdown(response);
    writeToFile("yourREADME.md", storedUserInput);
    console.log(response);
  });
}

// Function call to initialize app
init();
