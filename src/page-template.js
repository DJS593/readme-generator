
module.exports = data => {
  // destructure page data by section
  
const { title, description } = data;
  

  
  return `
  # ${data.title}

  ## Description 
  ${data.description}
  
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



//module.exports = generatePage;