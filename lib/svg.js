const {Circle, Square, Triangle} = require('./shapes')

class SVG{
    constructor(){
        this.textElement = ""
        this.shapeElement = ""

       
        }
        
        setText(userText, userTextColor){
            this.textElement=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${userTextColor}">${userText}</text>`
            
        }

        setShape(userShape){
            this.shapeElement = userShape.render()
        }
        
        render() {
            return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
            
    }
    

}

module.exports = SVG
