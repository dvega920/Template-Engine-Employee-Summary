const Employee = require('./lib/Employee');

class Manager extends Employee {
    constructor(name, id, title, email) {
        super(name, id, title, email, officeNumber)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;