const Shape = require('./shape.js');

// Using "shapeColor" so that naming stays consistent even though it can be named whatever I wish. Using children more would be confusing
class Triangle extends Shape{
  constructor(shapeColor) {
    super(shapeColor);
  }

  render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

module.exports = Triangle; 