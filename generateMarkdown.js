// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
       return `[!License: ${license}](https://img.shields.io/github/license/bigcat86/readme-generator)]`; 
    }else {
        return '';
    } 
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license) {
        return `(https://opensource.org/licenses/${license})`;
    }else {
        return '';
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    renderLicenseBadge(license);
    renderLicenseLink(license);
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    renderLicenseSection(data.license)
    return `# ${data.title} 
## Description
### ${data.description}
## Table of Contents
### ${data.table}
## Installation
### ${data.installation}
## Usage
### ${data.description}
## License
### ${data.license}
## Contributing
### ${data.contributing}
## Tests
### ${data.tests}
## Questions?
### ${data.questions}
### ${data.username}
### ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;