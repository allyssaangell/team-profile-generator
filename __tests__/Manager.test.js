// officeNumber
// getRole()

const Manager = require("../lib/Manager.js");
const Employee = require("../lib/Employee.js")

test("test office number via constructor", () => {
    const number = 1231231234
    const manager = new Manager("Bob", 1234, "test", number);
    expect(manager.officeNumber).toBe(number);
})

test("getRole should be Manager", () => {
    const manager = "Manager"
    const managerRole = new Manager("Bob", 1234, "test", 1231231234);
    expect(managerRole.getRole()).toBe(manager);
});

test("test office number from getOfficeNumber", () => {
    const number = 1231231234;
    const officeNumber = new Manager("Bob", 1234, "test", number);
    expect(officeNumber.getOfficeNumber()).toBe(number);
});