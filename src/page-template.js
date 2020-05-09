
//module.exports = templateData => {
  // destructure page data by section
  
const generatePage = templateData => {

  const { title, description } = templateData;
  

  
  return `
  # **${templateData.title}**

  ## Description 
  ${templateData.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Badges](#badges)
  * [Contributing](#contributing)
  * [Tests](#tests) 
  
  ## Installation Instructions <a name="installation"></a> 
  
  ## Usage Instructions <a name="usage"></a>
  
  ## Credits <a name="credits"></a>
  
  ## License <a name="license"></a>
  
  ## Badges <a name="badges"></a>
  
  ## Contributing <a name="contributing"></a>
  
  ## Tests <a name="tests"></a>
  
  
  `;
};

// ${data.title}
// ${data.description}
// ${data.installation}
// ${data.usage}



module.exports = generatePage;