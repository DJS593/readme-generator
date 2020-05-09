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



//  BEGIN CODE


const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('./utils/generateMarkdown.js');
const generatePage = require('./src/page-template.js');


// taking code from weekly lesson as a starting point for the assignment

// fs.writeFile('./README.md', pageHTML , err => {
// if (err) throw err;

// console.log('README.md complete! Check out README.md to see the output!');
// });


// array of questions for user

// ADD SOME CONFIRM QUESTIONS 9.3.5

const promptUser = () => {
  
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
  
promptUser()
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
    .catch(err => {
    console.log(err);
  }); 
  
  


const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./READMD.md', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File Created!'
      });
    });
  });
};


// function to initialize program
function init() {

}

// function call to initialize program
init();





