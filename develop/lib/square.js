const Shape = require('./shape.js');

// Using "shapeColor" so that naming stays consistent even though it can be named whatever I wish. Using children more would be confusing.
class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  
  render() {
    return `<rect x="90" y="45" width="120" height="120" fill="${this.shapeColor}" />`
  }
}

module.exports = Square;