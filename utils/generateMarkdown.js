// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

          ## Description 
          ${data.description}

          ## Table of Contents (links need to be live)
            * [Installation](#installation)
            * [Usage](#usage)
            * [Credits](#credits)
            * [License](#license)
            * [Badges](#badges)
            * [Contributing](#contributing)
            * [Tests](#tests) 


          ## Installation Instructions <a name="installation"></a> 
          ${data.installation}

          ## Usage Instructions <a name="usage"></a>
          ${data.usage}

          ## Credits <a name="credits"></a>

          ## License <a name="license"></a>

          ## Badges <a name="badges"></a>

          ## Contributing <a name="contributing"></a>

          ## Tests <a name="tests"></a>


`;
}

module.exports = generateMarkdown;
