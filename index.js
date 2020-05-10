// App designed to build a README.md file by utilizing answers entered on the command line

// require section

const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./util/generateMarkdown.js');


// promptUser asks the end-user a series of questions that will be used to build the final README.md

const promptUser = () => { 
  return inquirer.prompt([
  
    // list of questions about the README.md
    // all questions require an answer
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
          console.log('Please provide contributioin guidelines!');
        }
      }
    },    
    {
      // test instructions
      type: 'input',
      name: 'test',
      message: 'Please provide test instructions. (Required)',
      validate: testInput => {
        if (testInput) {
          return true;
        } else {
          console.log('Please provide test instructions or enter "none."')
        }
      }
    },
    {
      // license
      type: 'checkbox',
      name: 'license',
      message: 'What license do you want to use? (Required)',
      choices: ['GNU GPL 3.0', 'Mozilla 2.0', 'Apache 2.0', 'MIT', 'The Unlicense'],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log('Please make a choice!');
        }
      }
    },
    {
      // github user name
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username? (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username.');
        }
      }
    },
    {
      // email address
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address.');
        }
      }
    }

  
  ]);
};
  

// a waterfall of promises and .then functions
// prompt questions, then collect data, then write the file otherwise catch an error

promptUser()
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageREADME => {
    return writeFile(pageREADME);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
    .catch(err => {
    console.log(err);
  }); 
  
  
// print user input to a README.md file 

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./READMD.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File Created!'
      });
    });
  });
};

