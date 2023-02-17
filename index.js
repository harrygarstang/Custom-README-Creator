const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the  name of your project?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.projectTitle.toLowerCase().split(' ').join('')}.md`;

    const markdownContent = `# ${data.projectTitle}

Description: ${data.name}

Table of Contents:
${data.stack.map((language) => `* ${language}`).join('\n')}

Installation:

Usage:

License:

Contributing:

Tests:

Questions: ${data.contact}`;
    fs.writeFile(filename, markdownContent, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });