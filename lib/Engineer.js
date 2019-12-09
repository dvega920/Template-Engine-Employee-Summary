const Employee = require('./lib/Employee');

class Engineer extends Employee {
    constructor(name, id, title, email) {
        super(name, id, title, email, github)
        this.github = github;
    }
    getGitHub() {
        console.log(this.github);
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;