const Engineer = require("../lib/Engineer.js");
//const Employee = require("../lib/Employee.js");

test("test for github account via constructor", () => {
  const githubName = "allyssaangell";
  const engineer = new Engineer("Bob", 1234, "test", githubName);
  expect(engineer.github).toBe(githubName);
});

test("getRole should be Engineer", () => {
  const engineer = "Engineer";
  const engineerRole = new Engineer("Bob", 1234, "test", "allyssaangell");
  expect(engineerRole.getRole()).toBe(engineer);
});

test("test github name from getGithub", () => {
  const githubName = "allyssaangell";
  const engineer = new Engineer("Bob", 1234, "test", githubName);
  expect(engineer.getGithub()).toBe(githubName);
});
