const Shape = require('./shape.js');

class Square extends Shape {
  constructor(children){
    super(children);
  }
  // Where the real money from the movie is made.
  render() {
      return `<rect   `
  }

}

module.exports = Square;