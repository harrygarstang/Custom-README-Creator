const inquirer = require('inquirer');
const fs = require('fs');

const badges = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "IBM": "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
};



inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the  name of your project?',
        },
        {
            type: 'input',
            message: 'Please provide a short description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please tell the user about any installations they need to run for this project',
            name: 'install',
        },
        {
            type: 'list',
            message: 'What license will regulate your project?',
            name: 'license',
            choices: Object.keys(badges),
        },
    ])
    .then((data) => {
        const filename = `${data.projectTitle.toLowerCase().split(' ').join('')}.md`;

        const markdownContent = `# ${data.projectTitle}


${badges[data.license]}
## Description:
${data.description}
        
 ## Table of Contents:
 * Description
 * Installation
 * Usage
 * License
 * Contributing
 * Tests
 * Questions
        
## Installation:
For this project to work please follow these instructions: 
-------
${data.install}
-------
        
## Usage:
        
## License:
        

        
This project is regulated by the ${data.license}.
        
## Contributing:
        
## Tests:
        
## Questions:`;
        fs.writeFile(filename, markdownContent, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

    //${data.stack.map((language) => `* ${language}`).join('\n')}