// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "MIT") {
    let licenseLink = "![License: MIT](https://opensource.org/licenses/MIT)";
  } else if (data.license === "Apache") {
    let licenseLink =
      "![License: Apache](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "GPLv2") {
    let licenseLink =
      "![License: GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (data.license === "GPLv3") {
    let licenseLink =
      "![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "BSD 3-clause") {
    let licenseLink =
      "![License: BSD 3-clause](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (data.license === "no license") {
    let licenseLink = "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "MIT") {
    let licenseBadge =
      "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (data.license === "Apache") {
    let licenseBadge =
      "[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (data.license === "GPLv2") {
    let licenseBadge =
      "[License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
  } else if (data.license === "GPLv3") {
    let licenseBadge =
      "[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (data.license === "BSD 3-clause") {
    let licenseBadge =
      "[License: BSD 3-clause](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (data.license === "no license") {
    let licenseBadge = "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseBadge = renderLicenseBadge(data);
  let licenseLink = renderLicenseLink(data);
  let licenseSection = `${licenseLink}${licenseLink}`;
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

//module .exports exports all code in
module.exports = generateMarkdown;

//data object is what comes from the index.js and we need to parse out data from it and make object literal on it. make sure to use MD syntax in obj literal

//function for rendering non-license badges
function renderBadges(data) {
  var badgesRequested = data.badges;
  var badgesArray = [];
  for (let i = 0; i < badgesRequested.length; i++) {
    const repositoryName = data.repoName;
    const username = data.username;
    if (badgesRequested[i] === "Github Stats") {
      badgesArray.push(
        `![Your Repository's Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true)`
      );
    }
    if (badgesRequested[i] === "most used languages")
      badgesArray.push(
        `![Your Repository's languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=blue-green)`
      );
  }
  if (badgesRequested[i] === "Contributors badges")
    badgesArray.push(
      `![GitHub Contributors Image](https://contrib.rocks/image?repo=${username}/${repositoryName})`
    );
}
if (badgesRequested[i] === "no badges") {
  let badgesArray = [];
}

renderBadges(data);
