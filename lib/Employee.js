// function Employee(name = "") {
//     this.name = name;
// }

class Employee {

    constructor(name, id, email) {
        this.name = name;
        //id email
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    //continue with all 
}

module.exports = Employee;