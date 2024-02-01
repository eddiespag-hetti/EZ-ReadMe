// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


console.log('test'); // Testing if node is running
// Answers Required - 
// What is the name of your project?
// 

// TODO: Create an array of questions for user input
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
        type: 'checkbox',
        name: 'license',
        message: 'What license is associated with this repository?',
        choices: [
            'Apache 2.0', 'MIT', 'GNU', 'BSD 2', 'The Unlicense'
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

// TODO: Create a function to write README file
const writeToFile = ({ project, description, installation, usage, test, license, username, email }) => 
`
## ${project}


## ${description}


## ${installation}


##${usage}


##${test}


##${license}


##${username}


##${email}
`



        
const init = () => {
    promptUser()

      .then((answers) => writeFile('README.md', writeToFile(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();









