// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  console.log(data);
  var licenseBadge = "";
  if (data.license === "MIT") {
    licenseBadge =
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (data.license === "Apache") {
    licenseBadge =
      "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (data.license === "GPLv2") {
    licenseBadge =
      "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
  } else if (data.license === "GPLv3") {
    licenseBadge =
      "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (data.license === "BSD 3-clause") {
    licenseBadge =
      "![License: BSD 3-clause](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (data.license === "no license") {
    licenseBadge = "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(data) {
  var licenseLink = "";
  if (data.license === "MIT") {
    licenseLink = "[License: MIT](https://opensource.org/licenses/MIT)";
  } else if (data.license === "Apache") {
    licenseLink =
      "[License: Apache](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "GPLv2") {
    licenseLink =
      "[License: GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (data.license === "GPLv3") {
    licenseLink = "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "BSD 3-clause") {
    licenseLink =
      "[License: BSD 3-clause](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (data.license === "no license") {
    licenseLink = "";
  }
  return licenseLink;
}

// If there is no license, return an empty string

//function for rendering non-license badges
function renderBadges(data) {
  var badgesRequested = data.badges;
  var badgesArray = [];
  var repositoryName = data.repoName;
  var username = data.username;
  for (var i = 0; i < badgesRequested.length; i++) {
    if (badgesRequested[i] === "Github Stats") {
      badgesArray.push(
        `![Your Repository's Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true)`
      );
      console.log(badgesArray);
    }
    if (badgesRequested[i] === "most used languages") {
      badgesArray.push(
        `![Your Repository's languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=blue-green)`
      );
    }
    if (badgesRequested[i] === "Contributors badges") {
      badgesArray.push(
        `![GitHub Contributors Image](https://contrib.rocks/image?repo=${username}/${repositoryName})`
      );
    }
    if (badgesRequested[i] === "no badges") {
      badgesArray = [];
    }
    return badgesArray;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  licenseBadge = renderLicenseBadge(data);
  licenseLink = renderLicenseLink(data);
  var licenseSection = `${licenseBadge}${licenseLink}`;
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ---
  ## Description
  ---
${data.description}

  ---
  ## Table of Contents
   -[Description](#Description)
   -[installation](#Installation)
   -[usage](#Usage)
   -[credits](#Credits)
   -[license](#License)
   -[badges](#Badges)
   -[features](#Features)
   -[tests](#Tests)
  
   ---
  ## Installation
  ---
  ${data.installation}
  ---
  ## Usage
  ---
  ${data.usage}
  ---
  ## Credits
  ---
  ${data.credits}

  ## License
  ---
  ${renderLicenseSection(data)}
  
  ## Badges
  ---
  ${renderBadges(data)}
  ## Features
  ---
  ${data.features}
  ## Contributing
  ---
  ## Tests
  ---
  ${data.tests}
`;
}

//module .exports exports all code in
module.exports = generateMarkdown;

//data object is what comes from the index.js and we need to parse out data from it and make object literal on it. make sure to use MD syntax in obj literal
