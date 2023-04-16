// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
       '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'; 
    }else {
        return '';
    } 
  }
//   [!License: ${license}](https://img.shields.io/github/license/bigcat86/readme-generator)]`
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
function renderLicenseLink(license) {
if (license) {
    `(https://opensource.org/licenses/${license})`;
}else {
    return '';
}
}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
function renderLicenseSection(license) {
if (license) {
    renderLicenseBadge(license);
    renderLicenseLink(license); 
}else {
    return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
renderLicenseSection(data.license)
return `# ${data.title} 
## Description
${data.description}
## Table of Contents
* [${data.table[0]}](https://github.com/bigcat86/readme-generator/blob/main/READMEnew.md#${data.table[0]})
* [${data.table[1]}](https://github.com/bigcat86/readme-generator/blob/main/READMEnew.md#${data.table[1]})
* [${data.table[2]}](https://github.com/bigcat86/readme-generator/blob/main/READMEnew.md#${data.table[2]})
* [${data.table[3]}](https://github.com/bigcat86/readme-generator/blob/main/READMEnew.md#${data.table[3]})
* [${data.table[4]}](https://github.com/bigcat86/readme-generator/blob/main/READMEnew.md#${data.table[4]})
* [${data.table[5]}](https://github.com/bigcat86/readme-generator/blob/main/READMEnew.md#${data.table[5]})
## Installation
${data.installation}
## Usage
${data.usage}
## License
[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)]

(https://opensource.org/licenses/${data.license})
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions?
${data.questions}
https://github.com/${data.username}

Please contact me at the following email with further questions: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;