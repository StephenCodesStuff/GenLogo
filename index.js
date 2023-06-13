
const { writeFile } = require('fs/promises');
const inquirer=require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes');
const SVG = require("./lib/svg");


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
        choices: ['triangle', 'square', 'circle']
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
            break;
        case "circle":
            shape= new Circle()
            break;
        
        default: 
            shape = new Triangle()
            break;
    }
    shape.setColor(response.shapeColor);
    svg.setShape(shape);
    return writeFile('./dist/logo.svg', svg.render());
})

.then(() => {
    console.log('Generated logo.svg');
  });









  

 