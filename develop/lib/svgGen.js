const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

class SVGGen {
  constructor(children){
      // Using this. allows for the rest of the class to see the variable. If const or let was used, it would not be seen outside that block of code.
      this.children = children;
      this.userSVG = "";
      if (children.shape === 'Circle'){
        this.userSVG = new Circle(this.children.shapeColor);
        //console.log("Text from children", '\n', children);
      }else if(children.shape === 'Square') {
        this.userSVG = new Square(this.children.shapeColor);
      }else{
        this.userSVG = new Triangle(this.children.shapeColor);
      }
    }

    setSVG() {
      // Adding the if else statements here will make it easier to add parameters for changing the size and centering of each shape
      if (this.children.shape === 'Circle'){
      
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.userSVG.render()}<text x="150" y="118" font-size="60" text-anchor="middle" fill="${this.children.letterColor}">${this.children.letters}</text></svg>`;
      
    }else if(this.children.shape === 'Square') {
      
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.userSVG.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.children.letterColor}">${this.children.letters}</text></svg>`;
    }else{
      
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.userSVG.render()}<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.children.letterColor}">${this.children.letters}</text></svg>`;
    }
    }
    
    render() {
      return this.setSVG();
    }
}

module.exports = SVGGen;