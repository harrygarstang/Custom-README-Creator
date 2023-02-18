const inquirer = require('inquirer');
const fs = require('fs');

const badges = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "IBM": "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    "Creative-Commons": "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "BSD 3-Clause License": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
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
            type: 'input',
            message: 'Please tell the user how to use your project',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What license will regulate your project?',
            name: 'license',
            choices: Object.keys(badges),
        },
        {
            type: 'list',
            message: 'What guidance do you want to provide regarding contribution to this project?',
            name: 'contribution',
            choices: [
                'This project is not seeking contributors', 'This project welcomes contributors, please fork the repository and create pull requests','Please contact me directly via email to enquire about contributing',
            ],
        },
        {
            type: 'input',
            message: 'Please write a test for the user to conduct if applicable',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username',
            name: 'githubUser',
        },
        {
            type: 'input',
            message: 'Please enter your GitHub page link',
            name: 'githubLink',
        },
        {
            type: 'input',
            message: 'Please enter your email address',
            name: 'email',
        },
    ])
    .then((data) => {
        const filename = `${data.projectTitle.toLowerCase().split(' ').join('')}.md`;

        const markdownContent = `# ${data.projectTitle}


${badges[data.license]}
## <a id="Description">Description:</a>
${data.description}
        
 ## Table of Contents:
 * [Description](#Description)  
 * [Installation](#Installation)
 * [Usage](#Usage)
 * [License](#License)
 * [Contributing](#Contributing)
 * [Tests](#Tests)
 * [Questions](#Questions)
        
 ## <a id="Installation:">Installation:</a>
 
${data.install}

        
## <a id="Usage">Usage:</a>
-- How to use this project -- 
${data.usage}

## <a id="License">License:</a>

This project is licensed by the ${data.license} license. 

## <a id="Contributing">Contributing:</a>

${data.contribution}

## <a id="Tests">Tests:</a>

* ${data.tests}
        
## <a id="Questions">Questions:</a>
For any questions, please reach out to me via any of the channels listed below!

* Github: My username is ${data.githubUser}, avaliable at ${data.githubLink}
* Email: Alternatively, you can email me at ${data.email}

`;
        fs.writeFile(filename, markdownContent, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

    //${data.stack.map((language) => `* ${language}`).join('\n')}