// Create a shape class that will be inherited by its children. 

class Shape {
  constructor(children = []) {
		this.children = children;
  }
}
module.exports = Shape;