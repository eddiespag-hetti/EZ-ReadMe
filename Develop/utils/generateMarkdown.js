// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ` ![badge](https://img.shields.io/badge/License-${license}-blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache_2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'MIT') {
    return 'https://opensource.org/license/mit/'
  } else if (license === 'GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else if (license === 'BSD_2') {
    return 'https://opensource.org/license/bsd-2-clause/'
  } else {
    return 'https://choosealicense.com/licenses/unlicense/'
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return ` ## License
${license}
link: ${renderLicenseLink(license)}
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ project, description, installation, usage, test, license, username, email }) {
  return `
  # ${project}

 ${renderLicenseBadge(license)}
  
  ## Description 
  ${description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ## Test
  ${test}
  
  ${renderLicenseSection(license)}
 
  ## Questions
  - Github Username: ${username}
  - Email: ${email}

`;
}

module.exports = generateMarkdown;
