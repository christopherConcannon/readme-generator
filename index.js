const inquirer = require('inquirer');


// array of questions for user
const questions = [
	{
		type     : 'input',
		name     : 'title',
		message  : 'What is the title of your project? (Required)',
		validate : (titleInput) => {
			if (titleInput) {
				return true;
			} else {
				console.log('Please enter the title of your project!');
				return false;
			}
		}
	},
	{
		type     : 'input',
		name     : 'description',
		message  : 'Give a description of your project (Required)',
		validate : (descriptionInput) => {
			if (descriptionInput) {
				return true;
			} else {
				console.log('Please give a description of your project!');
				return false;
			}
		}
	},
	{
		type    : 'input',
		name    : 'installation',
		message : 'Give installation instructions for your project'
	},
	{
		type    : 'input',
		name    : 'usage',
		message : 'Provide instructions for how to use your project'
	},
	{
		type    : 'input',
		name    : 'contributing',
		message : 'Add guidelines for how to contribute to your project'
	},
	{
		type    : 'input',
		name    : 'testInstructions',
		message : 'Explain how to run tests on your project'
	},
	{
		type    : 'list',
		name    : 'license',
		message : 'Which license would you like to use for your project?',
		choices : [
			'MIT',
			'GNU AGPLv3',
			'GNU GPLv3',
			'GNU LGPLv3',
			'Mozilla Public 2.0',
			'Apache 2.0',
			'Boost Software 1.0',
			'The Unlicense'
		],
		default : 0
	},
	{
		type     : 'input',
		name     : 'github',
		message  : 'Enter GitHub user name. (Required)',
		validate : (userNameInput) => {
			if (userNameInput) {
				return true;
			} else {
				console.log('Please enter your GitHub user name!');
				return false;
			}
		}
	},
	{
		type     : 'input',
		name     : 'email',
		message  : 'Enter your email. (Required)',
		validate : (emailInput) => {
			if (emailInput) {
				return true;
			} else {
				console.log('Please enter your email!');
				return false;
			}
		}
	}
];