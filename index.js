
const fs = require('fs');
const {prompt}=require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes')

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
        name: 'textColor',
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
        name: 'shapeColor',
        message: 'What color do you want your shape',
    },

])
.then((response) =>
fs.writeFile("readme.md",generateMarkdown (response),(err)=>{
    err ? console.log(err) : console.log("File Made")
})
);



  

 