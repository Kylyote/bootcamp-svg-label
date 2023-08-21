const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

class SVGGen {
  constructor(children){
      let userSVG = "";
      if (children.shape === 'Circle'){
        userSVG = new Circle();
        console.log("Text from children", '\n', children);
      }else if(children.shape === 'Square') {
        userSVG = new Square();
      }else{
        userSVG = new Triangle();
      }

    }
    setSVG(children,userSVG) {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${userSVG}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${children.letterColor}">${children.letters}</text></svg>`;
    }
    
    render(children, userSVG) {
      return this.setSVG(children, userSVG);
    }
}

module.exports = SVGGen;