// Create a shape class that will be inherited by its children. 
// This snippet of code could probably be rolled into shape class, but it gives a chance to use extends. Especially since it doesn't really save any lines of code. 
class Shape {
  constructor(shapeColor) {
		this.shapeColor = shapeColor;
  }
}

module.exports = Shape;