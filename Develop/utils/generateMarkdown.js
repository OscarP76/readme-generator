// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license !== 'none') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ''


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `
    
    The license link is [LicenseLink] ${(license)}`
  }
  return ''

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## license
    
    The license used was ${license}`
  }
  return ''
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Summary
  ${data.description}

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}

  ## Languages
  ${data.languages}

  ## GitHub
  ${data.github}

  ## Email
  ${data.email}

  ## Dependencies
  ${data.dependencies}

  


`;
}

module.exports = generateMarkdown;
