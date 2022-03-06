const Employee = require("../lib/Employee.js");

test("can instantiate Employee instance", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("can set name via constructor arguments", () => {
  const name = "Bob";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("can set id via constructor arguments", () => {
  const id = 1234;
  const e = new Employee("Bob", id);
  expect(e.id).toBe(id);
});

test("can set email via constructor arguments", () => {
  const email = "email";
  const e = new Employee("Bob", 1234, email);
  expect(e.email).toBe(email);
});
// name could be anything, string, id is number but the name of it can be whatever
