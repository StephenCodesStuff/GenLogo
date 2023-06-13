
// const fs = require('fs');
const { writeFile } = require('fs/promises');
const inquirer=require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes')
const SVG = require("./lib/svg");
// const SVG = require('svg');
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
.then((response) => {
    let svg = new SVG();
    svg.setText(response.text,response.textColor)
    let shape;
    switch (response.shape) {
        case "triangle": 
            shape= new Triangle()
            break;

        case "square":
            shape= new Square()
        
        case "circle":
            shape= new Circle()
        
        default: 
            shape = new Triangle()
            break;
    }
    shape.setColor(response.shapeColor);
    svg.setShape(shape);
    console.log(svg.render())
    return writeFile('./dist/logo.svg', svg.render());
})

.then(() => {
    // This function will only run after the asynchronous call to writeFile has resolved.
    console.log('Generated logo.svg');
  });

// .then((svg) => fs.writeFile("logo.svg", svg.render(), (err) => {
//     if (err)
//     console.log(err);
//   else {
//     console.log("File written successfully\n");}
// }));







  

 