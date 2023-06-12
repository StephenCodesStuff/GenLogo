const {prompt}=require('inquirer');

// text, color, shape and shape color
// svg fill attribute

prompt([
    {
        type:'input',
        name: 'text',
        message: 'What are three letters of your logo?',
        validate: text => text.length == 3 || "Please three letters."
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color do you want your text',
        // validate: textColor => 

    },
    {
        type:'list',
        name:'shape',
        message:'What shape will your logo be',
        choices: ['triangle', 'square', 'cirle']
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'What color do you want your shape',
    },



])