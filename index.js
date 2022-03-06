const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let arr = [];

function init() {
  function mgrQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "mgrName",
          message: "What is the name of the Manager? (Required)",
          validate: (mgrName) => {
            if (mgrName) {
              return true;
            } else {
              console.log("Please enter the Manager's name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the Id of the Manager? (Required)",
          validate: (mgrId) => {
            if (mgrId) {
              return true;
            } else {
              console.log("Please enter the Manager's Id!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the Email address of the Manager? (Required)",
          validate: (mgrEmail) => {
            if (mgrEmail) {
              return true;
            } else {
              console.log("Please enter the Manager's Email!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the Office Number of the Manager? (Required)",
          validate: (mgrOfficeNumber) => {
            if (mgrOfficeNumber) {
              return true;
            } else {
              console.log("Please enter the Manager's Office Number!");
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.mgrName,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        arr.push(manager);
        addTeam();
      });
  }

  function addTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message:
            "What employee would you like to add to the team? (Required)",
          name: "addEmployee",
          choices: ["Engineer", "Intern", "No others to add."],
          validate: (addEmployeeInput) => {
            if (addEmployeeInput) {
              return true;
            } else {
              console.log("Please choose an option provided!");
              return false;
            }
          },
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployee) {
          case "Engineer":
            engQuestions();
            break;
          case "Intern":
            internQuestions();
            break;
          default:
            console.log(arr);
          // htmlPage();
        }
      });
  }

  function engQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engName",
          message: "What is the name of the Engineer? (Required)",
          validate: (engName) => {
            if (engName) {
              return true;
            } else {
              console.log("Please enter the Engineer's name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the Id of the Engineer? (Required)",
          validate: (engId) => {
            if (engId) {
              return true;
            } else {
              console.log("Please enter the Engineer's Id!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the Email address of the Engineer? (Required)",
          validate: (engEmail) => {
            if (engEmail) {
              return true;
            } else {
              console.log("Please enter the Engineer's Email!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is the GitHub username of the Engineer? (Required)",
          validate: (engGithub) => {
            if (engGithub) {
              return true;
            } else {
              console.log("Please enter the Engineer's GitHub username!");
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engName,
          answers.id,
          answers.email,
          answers.github
        );
        arr.push(engineer);
        addTeam();
      });
  }

  function internQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the name of the Intern? (Required)",
          validate: (internName) => {
            if (internName) {
              return true;
            } else {
              console.log("Please enter the Intern's name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the Id of the Intern? (Required)",
          validate: (internId) => {
            if (internId) {
              return true;
            } else {
              console.log("Please enter the Intern's Id!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the Email address of the Intern? (Required)",
          validate: (internEmail) => {
            if (internEmail) {
              return true;
            } else {
              console.log("Please enter the Intern's Email!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "What School does the Intern attend? (Required)",
          validate: (internSchool) => {
            if (internSchool) {
              return true;
            } else {
              console.log("Please enter the Intern's school!");
              return false;
            }
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.id,
          answers.email,
          answers.school
        );
        arr.push(intern);
        addTeam();
      });
  }

  mgrQuestions();
}

// async function init() {
//   try {
//     const answers = await mgrQuestions();

//     console.log(JSON.stringify(answers, null, "\t"));

//     console.log("Successful questions");
//   } catch (err) {
//     console.log(err);
//   }
// }

init();
