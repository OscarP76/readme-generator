## Week 9 homework Readme generator
File used for my week 9 homework assignment
## Languages used
Node.js
## Summary
I created a Readme generator using Node.js
## Code Snippet
```
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

```
## My Links
[]()
[]()
