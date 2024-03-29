// Loading in required libraries as well as linked Js file
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');


// Answers Required - 
// What is the name of your project?
// Description of project
// How to install
// Intended use
// How can we test?
// Which license?
// GH Username?
// Email?



// Array of questions
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project?',
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended use your project?',
    },
    {   
        type: 'input',
        name: 'test',
        message: 'How can your application be tested?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is associated with this repository?',
        choices: [
            'Apache_2.0', 'MIT', 'GNU', 'BSD_2', 'The_Unlicense'
        ],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
]);
};


// Function to initialize 
const init = () => {
promptUser()

.then((answers) => writeFile('README.md', generateMarkdown(answers)))
.then(() => console.log('Successfully wrote to README.md'))
.catch((err) => console.error(err));
};


// Calling the init() function
init();













