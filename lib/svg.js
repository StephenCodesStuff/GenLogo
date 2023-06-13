const {Circle, Square, Triangle} = require('./shapes')

class SvgText{
    constructor(text, textColor){
        this.text=text;
        this.textColor = textColor;
        console.log(this.text)
        console.log(this.textColor)


       
        };
    
        render() {
            return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
    

}

module.exports = {SvgText}

const textOutput = new SvgText()
console.log(textOutput.render('hello', 'blue'))