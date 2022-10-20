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
    name: "Table of contents question",
  },
  {
    type: "input",
    message: "provide installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter usage information",
    name: "usage",
  },
  {
    type: "list",
    message: "Enter license information",
    name: "license",
    choices: ["MIT", "Apache", "GPLv2", "GPLv3", "BSD 3-clause", "no license"],
  },
  {
    type: "input",
    message: "provide installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "provide your github username",
    name: "username",
  },
  {
    type: "input",
    message: "provide your github repository name",
    name: "repoName",
  },
  {
    type: "checkbox",
    message: "Enter badges to add",
    name: "badges",
    choices: [
      "Github Stats",
      "most used languages",
      "Contributors badges",
      "no badges",
    ],
  },
  {
    type: "input",
    message: "Enter features information",
    name: "features",
  },
  {
    type: "input",
    message: "Enter contributing information",
    name: "contributing",
  },
  {
    type: "input",
    message: "Enter tests",
    name: "tests",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
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

// list all question in index.js and call the generate markdown function. this file will tell the GM file what to append to the page. make prompts first. then store input in variable and figure out how to get variable into the markdoen file and make an object literal
