/*** NON-WORKING ***
Just enough to copy and paste from previous assignment and begin refining. 
Haven't been able to test. I'm sorry. 
*/

const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is the employee name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee id?"
        },
        {
            type: "list",
            name: "title",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ]);
}

promptUser()
    .then(function (userAns) {
        data = userAns;
        console.log(userAns);
        // let api = `https://api.github.com/users/${data.username}`;
        // return Employee;
    })
    // .then(function (response) {
    //     console.log(response);
    //     const html = generateHTML(data, response);
    //     return writeFileAsync("index.html", html);
    // })
    // .then(function () {
    //     console.log("Successfully wrote to index.html");
    //     let convert = fs.readFileSync("./index.html", "utf8");
    //     let options = { format: "Letter" };
    //         if (err)
    //             return console.log(err)
    //         console.log(res)
    //     })
    // })
    .catch(function (err) {
        console.log(err);
    });