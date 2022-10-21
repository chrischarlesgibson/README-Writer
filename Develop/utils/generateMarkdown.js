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
    licenseLink = "[Link](https://opensource.org/licenses/MIT)";
  } else if (data.license === "Apache") {
    licenseLink = "[Link](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "GPLv2") {
    licenseLink =
      "[Link](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (data.license === "GPLv3") {
    licenseLink = "[Link](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "BSD 3-clause") {
    licenseLink = "[Link](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (data.license === "no license") {
    licenseLink = "";
  }
  return licenseLink;
}

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
      badgesArray = "";
    }
    return badgesArray;
  }
}

//function for rendering usage section or rendering nothing if user doesnt want a usage section
function createUsage(data) {
  if (data.usageQuestion === true) {
    var use = `## Usage
  ${data.usage}`;
  } else {
    use = "";
  }
  return use;
}

//function for rendering usage section gif or image  or rendering nothing if user doesnt want a usage section
function createUsageImage(data) {
  if (data.usageImageQuestion === true) {
    var useImage = `![Gif](${data.usageImage})`;
  } else {
    useImage = "";
  }
  return useImage;
}

//function for rendering installation section or rendering nothing if user doesnt want a installation section
function createInstallation(data) {
  if (data.installationQuestion === true) {
    var inst = `## Installation
  ${data.installation}`;
  } else {
    inst = "";
  }
  return inst;
}

//function for rendering features section or rendering nothing if user doesnt want a features section
function createFeatures(data) {
  if (data.featuresQuestion === true) {
    var feature = `## Features
  ${data.features}`;
  } else {
    feature = "";
  }
  return feature;
}

//function for rendering contributing guidlines section or rendering nothing if user doesnt want a  contributing guidlines  section
function createContributing(data) {
  if (data.contributingQuestion === true) {
    var contribute = `## Contributing
  ${data.contributing}`;
  } else {
    contribute = "";
  }
  return contribute;
}

//function for rendering testing section or rendering nothing if user doesnt want a  testing  section
function createTesting(data) {
  if (data.testsQuestion === true) {
    var test1 = `## Tests
  ${data.tests}`;
  } else {
    test1 = "";
  }
  return test1;
}

//function for rendering table of contents section or rendering nothing if user doesnt want a  table of contents  section
function createTableOfContents(data) {
  if (data.TableOfContentsQuestion === true) {
    var tableContents = `## Table of Contents
  
  - [Description](#Description)
  - [installation](#Installation)
  - [usage](#Usage)
  - [features](#Features)
  - [Contributing guidlines](#Contributing)
  - [test](#Tests)
  - [license](#License)
  - [credits](#Credits)
  - [badges](#Badges)
  - [Questions](#Questions)`;
  } else {
    tableContents = "";
  }
  return tableContents;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string. logic for returning an empty string if the user delects no license is contained within the renderlicense badge function and also the render licenselink function
function renderLicenseSection(data) {
  licenseBadge = renderLicenseBadge(data);
  return licenseBadge;
}

// function renderLicenseSection(data) {
// licenseLink = renderLicenseLink(data);
//   var licenseSection = `${licenseBadge}${licenseLink}`;

// var badgesRequested = data.badges;
// var badgesArray = [];
// var repositoryName = data.repoName;
// var username = data.username;
// for (var i = 0; i < badgesRequested.length; i++) {
//   if (badgesRequested[i] === "Github Stats") {
//     badgesArray.push(
//       `![Your Repository's Stats](https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true)`
//     );
//     console.log(badgesArray);
function renderLicenseSentence(data) {
  if (data.license) {
    var licenseSentence = `Licensed under the ${
      data.license
    } license. Link to license information found here ${renderLicenseLink(
      data
    )}`;
  } else if (data.license === "no license") {
    licenseSentence = "";
  }
  return licenseSentence;
}

// function renderTechnologies(data) {
//   var technologies = data.technologies;
//   var techArray = [];
//   for (let i = 0; i < technologies.length; i++) {
//     if (technologies[i] === "HTML") {
//       techArray.push(
//         "* HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)"
//       );
//     }
//     if (technologies[i] === "Javascript") {
//       techArray.push(
//         "* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)"
//       );
//     }
//     if (technologies[i] === "CSS") {
//       techArray.push(
//         "* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)"
//       );
//     }
//     if (technologies[i] === "jQuery") {
//       techArray.push("* [jQuery](https://api.jquery.com/)");
//     }
//     if (technologies[i] === "Node.js") {
//       techArray.push("* [Node.js](https://nodejs.org/en/)");
//     }
//     if (technologies[i] === "Node.js") {
//       techArray.push(
//         "* [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)"
//       );
//     }
//   }
//   return renderTechnologies;
// }

// ## Built with:
// ${renderTechnologies(data)}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseSection(data)}

## Description

${data.description}

${createTableOfContents(data)}

${createInstallation(data)}

${createUsage(data)}
${createUsageImage(data)}

${createFeatures(data)}

${createContributing(data)}

${createTesting(data)}

## License

${renderLicenseSentence(data)}


## Credits

${data.credits}
  
## Badges

${renderBadges(data)}

## Questions

If you are experiencing any issues, you can contact me at my Github [${
    data.username
  }](https://github.com/${data.username}) or contact me through email at${
    data.email
  }`;
}

//module .exports exports all code in
module.exports = generateMarkdown;
