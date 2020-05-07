// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

//var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
//const [name, github] = profileDataArgs;


  

// array of questions for user
const questions = () => {
  return inquirer.prompt([
    
    {
      // project title
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter the project title!');
        }
      }
    },    
    {
      // project description
      type: 'input',
      name: 'description',
      message: 'Describe the project. (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please provide a description of the project!');
        }
      }
    },
    {
      // installation instructions
      type: 'input',
      name: 'installation',
      message: 'Enter the project installation instructions (Required).',
      validate: installInput => {
        if (installInput) {
          return true;
        } else {
          console.log('Please provide installation instructions!')
        }
      }
    },
    {
      // usage information
      type: 'input',
      name: 'usage',
      message: 'Enter the project usage information. (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please provide usage instructions!');
        }
      }
    },
    {
      // contribution guidelines
      type: 'input',
      name: 'contribution',
      message: 'Enter the project contribution guidelines. (Required)',
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log('Please provide contributors!');
        }
      }
    },
    {
      // test instructions
      type: 'input',
      name: 'test',
      message: 'Enter the project test instructions.'     
    },
    {
      // license
      type: 'checkbox',
      name: 'license',
      message: 'What license do you want to use? (Required)',
      choices: ['GNU General Public License 3.0', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT', 'The Unlicense'],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log('Please make a choice!');
        }
      }
    }




  
  ]);
};
  
questions().then(answers => console.log(answers));


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


// profileDataArr.forEach(profileItem => console.log(profileItem));

// the above is the same as the following:


// profileDataArr.forEach(function(profileItem) {
//   console.log(profileItem);
// });


// printProfileData(profileDataArgs);

// fs.writeFile('README.md', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('README.md complete! Check out README.md to see the output!');
// });