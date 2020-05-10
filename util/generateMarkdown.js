// pull in the data for the README.md
  
const generatePage = templateData => {

  let { title, description, installation, usage, contribution, test, email, username, license } = templateData;
  
  // if statement to ensure the correct badge is shown depending on license choic
  
  let badge = '';
 
  if (license[0] === "GNU GPL 3.0") {
    badge = ("[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
  } else if (license[0] === "Mozilla 2.0") {
    badge = ("[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)");
  } else if (license[0] === 'Apache 2.0') {
    
    badge = ("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]");
    
  } else if (license[0] === "MIT") {
    badge = ("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
  } else {
    
    badge = ("[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)");
  }
    
  // README.md file structure and linked data

  return `
  # **${title}**
  ${badge}

  ## Description 
  ${description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Badges](#badges)
  * [Contributing](#contributing)
  * [Tests](#tests) 
  * [Questions](#questions)
  
  ## Installation Instructions <a name="installation"></a> 
  ${installation}
  
  ## Usage Instructions <a name="usage"></a>
  ${usage}
  
  ## License <a name="license"></a>
  ${license}
  
  ## Contributing <a name="contributing"></a>
  ${contribution}
  
  ## Tests <a name="tests"></a>
  ${test}

  ## Questions <a name="questions"></a>
  github.com/${username}
  
  Email ${email} with any additional questions. 
  
  `;
};


module.exports = generatePage;

