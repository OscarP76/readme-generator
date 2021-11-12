// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['Apache', 'none', 'MIT'],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'languages',
        message: 'What languages did you use?',
    }];

// TODO: Create a function to write README file
// do an fs.writeFile in this code block
function writeToFile(fileName, data) {


}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answer)  => {
        fs.writeFile('sampleReadme.md', generateMarkdown(answer), (err) =>
        err ? console.error(err) : console.log('Generating READme'))
      
    }
    )}
        // ask all the questions
        // give it to this dude
        // inside the .then(answer)

    

// Function call to initialize app
init();
