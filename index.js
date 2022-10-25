const questions = require('inquirer');
const fs = require('fs');
let projectTitle = '';
let description = '';
let description1 = '';
let description2 = '';
let description3 = '';
let installation = '';
let usage = '';
let credits = '';
let license = '';
let email = '';
let githubUser = '';

questions
  .prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type a short description',
    },
    {
        type: 'input',
        name: 'description1',
        message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'description2',
        message: 'What problem does the application solve?',
    },
    {
        type: 'input',
        name: 'description3',
        message: 'What did you learn?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install the application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators and/or any third party assets.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license if applicable.',
        choices: ['MIT License','Apache License 2.0','GPL License','BSD License(2-clause)','BSD License(3-clause)','BSD License(4-clause)'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Please enter your GitHub username:',
    },
  ])
  .then((answers) => {
        console.log(answers);
        projectTitle = ('# ' + answers.projectTitle).toUpperCase();
        description = answers.description;
        description1 = answers.description1;
        description2 = answers.description2;
        description3 = answers.description3;
        installation = answers.installation;
        usage = answers.usage;
        credits = answers.credits;
        license = answers.license;
        email = answers.email;
        githubUser = answers.githubUser;
        fs.writeFileSync('readme.md', projectTitle+'\n', err => {
        if (err) {
            console.log(err);
            }
        });
        fs.appendFileSync('readme.md', ('\n'+'## Description'+'\n'), err => {
        if (err) {
            console.log(err);
            }
        });
        fs.appendFileSync('readme.md', ('\n'+description+'\n'), err => {
        if (err) {
            console.log(err);
            }
        });
        fs.appendFileSync('readme.md', ('\n'+'- '+description1)+('\n'+'- '+description2)+('\n'+'- '+description3+'\n'), err => {
            if (err) {
                console.log(err);
                }
            });
        fs.appendFileSync('readme.md', (
            ('\n'+'## Table of Contents'+'\n')+
            (`\n- [Installation](#installation)\n`)+
            (`- [Usage](#usage)\n`)+
            (`- [Credits](#credits)\n`)+
            (`- [License](#license)\n`)
            ), err => {
            if (err) {
                console.log(err);
                }
            });    
        fs.appendFileSync('readme.md', ('\n'+'## Installation'+'\n'), err => {
            if (err) {
                console.log(err);
                }
            });
        fs.appendFileSync('readme.md', ('\n'+installation+'\n'), err => {
            if (err) {
                console.log(err);
                }
            });
        fs.appendFileSync('readme.md', ('\n'+'## Usage'+'\n'), err => {
            if (err) {
                console.log(err);
                }
            });
        fs.appendFileSync('readme.md', ('\n'+usage+'\n'), err => {
            if (err) {
                console.log(err);
                }
            });
        fs.appendFileSync('readme.md', ('\n'+'## Credits'+'\n'), err => {
            if (err) {
                console.log(err);
                }
            });
        fs.appendFileSync('readme.md', ('\n'+credits+'\n'), err => {
            if (err) {
                console.log(err);
                }
            });
        fs.appendFileSync('readme.md', ('\n'+'## License'+'\n'), err => {
            if (err) {
                console.log(err);
                }
            });
        fs.appendFileSync('readme.md', ('\n'+license+'\n'), err => {
            if (err) {
                console.log(err);
                }
            });
        fs.appendFileSync('readme.md', ('\n'+'## Questions'+'\n'), err => {
            if (err) {
                console.log(err);
                }
            });
        fs.appendFileSync('readme.md', ('\n'+'Email: '+email+'\n'), err => {
            if (err) {
                console.log(err);
                }
            });
        fs.appendFileSync('readme.md', ('GitHub Profile: '+'https://github.com/'+githubUser), err => {
            if (err) {
                console.log(err);
                }
            });
  });