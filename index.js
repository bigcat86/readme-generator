// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'List your table of contents?',
        name: 'table',
    },
    {
        type: 'input',
        message: 'Describe the installation process?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe the project usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is the name & type of license?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Who contributed?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What tests did you perform?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Questions?',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Completed README.md'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) =>
    writeToFile('READMEnew.md', data))    
}

// Function call to initialize app
init();