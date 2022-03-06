// school
// getSchool()
// getRole()

const Intern = require("../lib/Intern.js");

test("test for school via constructor", () => {
  const school = "U of M";
  const intern = new Intern("Bob", 1234, "test", school);
  expect(intern.school).toBe(school);
});

test("getRole should be Intern", () => {
  const intern = "Intern";
  const internRole = new Intern("Bob", 1234, "test", "U of M");
  expect(internRole.getRole()).toBe(intern);
});

test("test school name from getSchool", () => {
  const school = "U of M";
  const intern = new Intern("Bob", 1234, "test", school);
  expect(intern.getSchool()).toBe(school);
});
