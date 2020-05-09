
//module.exports = templateData => {
  // destructure page data by section
  
const generatePage = templateData => {

  const { title, description, installation, usage, credits, contributing, tests, email, username, license } = templateData;
  

  
  return `
  # **${title}**

  ## Description 
  ${description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Badges](#badges)
  * [Contributing](#contributing)
  * [Tests](#tests) 
  * [Questions](#questions)
  
  ## Installation Instructions <a name="installation"></a> 
  ${installation}
  
  ## Usage Instructions <a name="usage"></a>
  ${usage}
  
  ## Credits <a name="credits"></a>
  ${credits}
  
  ## License <a name="license"></a>
  ${license}
  
  ## Badges <a name="badges"></a>
  
  ## Contributing <a name="contributing"></a>
  ${contributing}
  
  ## Tests <a name="tests"></a>
  ${tests}

  ## Questions <a name="questions"></a>
  github.com/${username}
  
  Email ${email} with any additional questions.
  
  
  `;
};


module.exports = generatePage;