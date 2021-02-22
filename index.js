var fs = require('file-system');
var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questionArr = [
{
    name:"title",
    type: "input",
    message:"What is your project name?"    
},
{
    name:"user",
    type: "input",
    message:"What is your Github username?"    
},
{
    name:"contact",
    type: "input",
    message:"Please provide an email for contact information..."    
},
{
    name:"description",
    type: "input",
    message:"Please give a brief description of the project?"    
},
{
    name:"installation",
    type: "input",
    message:"Before this application can be run, what installation steps are required?"    
},
{
    name:"usage",
    type: "input",
    message:"How does the user go about operating this application?"    
},
{
    name:"testing",
    type: "input",
    message:"What command is used to run testing?"    
},
{
    name:"contribuation",
    type: "input",
    message:"What can other users do to help contribute to the project?"    
},
{
    name:"licenses",
    type: "list",
    message:"Which license is this application operating under?",
    choices:["N/A", "APACHE 2.0", "MIT", "BSD 3"]
},
];

// function to write README file
function writeToFile(fileName, data) {
    var mDData = generateMarkdown(data);
    fs.writeFileSync(fileName, mDData);
}

// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questionArr);
    console.log(answers)
    writeToFile('README.md',answers);
}

// function call to initialize program
init();
