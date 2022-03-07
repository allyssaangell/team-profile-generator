const generateTeam = (team) => {
  const html = [];

  const generateManager = (manager) => {
    let managerHtml = `
  <div class="cards">
      <div >
          <h2>${manager.getName()}</h2>
          <h3>Manager</h3>
      </div>
      <div>
          <ul class="card-info">
              <li>ID: ${manager.getID()}</li>
              <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li>Office number: ${manager.getOfficeNumber()}</li>
          </ul>
      </div>
  </div>
          `;
    html.push(managerHtml);
  };

  const generateEngineer = (engineer) => {
    let engineerHtml = `
  <div class="cards">
      <div>
          <h2>${engineer.getName()}</h2>
          <h3>Engineer</h3>
      </div>
      <div>
          <ul class="card-info">
              <li>ID: ${engineer.getID()}</li>
              <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
          </ul>
      </div>
  </div>
          `;
    html.push(engineerHtml);
  };

  const generateIntern = (intern) => {
    let internHtml = `
  <div class="cards">
      <div>
          <h2>${intern.getName()}</h2>
          <h3>Intern</h3>
      </div>
      <div>
          <ul class="card-info">
              <li>ID: ${intern.getID()}</li>
              <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li>School: ${intern.getSchool()}</li>
          </ul>
      </div>
  </div>
          `;
    html.push(internHtml);
  };

  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
      generateIntern(team[i]);
    }
  }

  return html.join("");
};

module.exports = (team) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <h1>My Team</h1>
      <div class="flex-container">
        ${generateTeam(team)}
      </div>
  </body>
  </html>
      `;
};
