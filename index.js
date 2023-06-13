
const fs = require('fs');
const inquirer=require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes')
const SVG = require('svg');
// text, color, shape and shape color
// svg fill attribute


inquirer
.prompt([
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
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want your shape',
    },
    {
        type:'list',
        name:'shape',
        message:'What shape will your logo be',
        choices: ['triangle', 'square', 'cirle']
    },
    
])

// function pickShape(response){
//     if (response.shape="square") {
//         return Square
//     } else if (response.shape="circle"){
//         return Circle
//     } else if (response.shape="triangle"){
//         return Triangle
//     }
// } 

// .then((response) => 
// fs.writeFile("logo.svg",Shape (response),(err)=>{
//     err ? console.log(err) : console.log("File Made")
// })
// )





  

 