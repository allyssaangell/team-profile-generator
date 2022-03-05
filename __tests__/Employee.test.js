const Employee = require('../lib/Employee.js');

test('can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object")
});

test("can set name via constructor arguments", () => {
const name = "Bob"
const e = new Employee(name)
expect(e.name).toBe(name)
});

// name could be anything, string, id is number but the name of it can be whatever