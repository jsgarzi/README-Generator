function licenseGrab(data) {
  console.log(data)
  if (data == 'N/A'){
    return ''
  }
  else if (data == 'BSD 3'){
    return'[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
  }
  else if (data == 'APACHE 2.0'){
    return'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'    
  }
  else {
    return'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${licenseGrab(data.licenses)}
## Github Account
  ${'https://github.com/' + data.user}
## Email / Contact
  ${data.contact}
## Table of Contents 

  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Application Usage](#Usage)
  4. [Testing Parameters](#Testing)
  5. [Get involved / Contribute](#Contribution)


## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Testing
${data.testing}

## Contribution
${data.contribution}

`;
}

module.exports = generateMarkdown;
