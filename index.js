const inquirer = require("inquirer");
//const Employee = require("./Employee");
//const Manager = require("./Manager");
//const Engineer = require("./Engineer");
//const Intern = require("./Intern");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of the Manager (Required)",
      validate: (mgrName) => {
        if (mgrName) {
          return true;
        } else {
          console.log("Please enter the Manager's name!");
          return false;
        }
      },
    },
  ]);
};

async function init() {
    try {
      const answers = await questions();
  
      console.log(JSON.stringify(answers, null, "\t"));
  
      console.log("Successful questions");
    } catch (err) {
      console.log(err);
    }
  }
init();

// jest RPG inspo
// Team.prototype.initializeTeam = function() {
//     inquirer
//     .prompt({
//         type: "text",
//         name: "name",
//         message: "Hello! What is the name of the Manager?"
//     })
//     .then (({ name }) => {
//         this.manager = new Manager(name);
//     })
// }
// module.exports = Team;

// README GENERATOR
// // TODO: Include packages needed for this application
// const inquirer = require("inquirer");
// const fs = require("fs");
// const util = require("util");
// const generateMarkdown = require("./Develop/utils/generateMarkdown.js");
// const writeFileAsync = util.promisify(fs.writeFile);

// // TODO: Create an array of questions for user input
// const questions = () => {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "title",
//       message: "What is your project title? (Required)",
//       validate: (titleInput) => {
//         if (titleInput) {
//           return true;
//         } else {
//           console.log("Please enter your project title!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "description",
//       message: "What is your project description? (Required)",
//       validate: (descriptionInput) => {
//         if (descriptionInput) {
//           return true;
//         } else {
//           console.log("Please enter your project description!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "installation",
//       message: "What are your installation instructions? (Required)",
//       validate: (installationInput) => {
//         if (installationInput) {
//           return true;
//         } else {
//           console.log("Please enter your project installation instructions!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "usage",
//       message: "What is your Usage Information? (Required)",
//       validate: (usageInput) => {
//         if (usageInput) {
//           return true;
//         } else {
//           console.log("Please enter your project usage information!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "list",
//       name: "license",
//       message: "What is your project license? (Required)",
//       choices: ["Apache_2.0", "ISC", "MIT"],
//       validate: (licenseInput) => {
//         if (licenseInput) {
//           return true;
//         } else {
//           console.log("Please enter your project license!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "contributor",
//       message: "Who are the contributors to your project? (Required)",
//       validate: (contributorInput) => {
//         if (contributorInput) {
//           return true;
//         } else {
//           console.log("Please enter the contributors!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "tests",
//       message: "What are your project test instructions? (Required)",
//       validate: (testsInput) => {
//         if (testsInput) {
//           return true;
//         } else {
//           console.log("Please enter your project tests!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "username",
//       message: "What is your GitHub username? (Required)",
//       validate: (usernameInput) => {
//         if (usernameInput) {
//           return true;
//         } else {
//           console.log("Please enter your GitHub username!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "What is your e-mail address? (Required)",
//       validate: (emailInput) => {
//         if (emailInput) {
//           return true;
//         } else {
//           console.log("Please enter your e-mail address!");
//           return false;
//         }
//       },
//     },
//   ]);
// };

// // TODO: Create a function to write README file
// // TODO: Create a function to initialize app
// async function init() {
//   try {
//     const answers = await questions();

//     console.log(JSON.stringify(answers, null, "\t"));

//     const readme = generateMarkdown(answers);

//     await writeFileAsync("README.md", readme);

//     console.log("Successfully wrote to README.md");
//   } catch (err) {
//     console.log(err);
//   }
// }

// // Function call to initialize app
// init();
