const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const inquirer = require("inquirer");
require("console.table");

init();

// Display the logo text and load main prompts
function init() {
    const logoText = logo({ name: "Employee Manager"}).render();
    console.log(logoText);
}

function empQuestions {
    inquirer
    .prompt ([
        {
            type: "list",
            name: "options",
            message: "What would you like to do?"
            choices: [
                "View all employees",
                "View all employees by department",
                "View all employees by manager",
                "Add employee",
                "Remove employee",
                "Update employee by role",
                "Update employee manager",
                "exit"
            ],
            name: "choice"
        }
    ]).then(function(res){
        console.log(res.choice);
        switch (res.choice) {
            case "View all employees":
                employeeView();
                break;
            
            case "View all employees by department":
                departmentView();
                break;
          
            case "View all employees by Manager":
                managerView();
                break;
          
            case "Add Employee":
                employeeAdd();
                break;
          
            case "Remove Employee":
                employeeRemove();
                break;
          
            case "Update Employee Role":
                employeeUpdate();
                break;
          
            case "Update Manager":
                employeeManager();
                break;
          
            case "Quit":
                connection.end();
                break;         
        }
    })
};