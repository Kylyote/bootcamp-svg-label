const Shape = require('./shape.js');

// Using "shapeColor" so that naming stays consistent even though it can be named whatever I wish. Using children more would be confusing
class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
  }
}

module.exports = Circle;