const Shape = require('./shape.js');

class Circle extends Shape {
  constructor(children) {
    super(children);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
  }
}

module.exports = Circle;