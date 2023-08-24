// import the required class files for the test to function
const Circle = require('../lib/circle.js');

describe ("Circle", ()=> {
  describe ("render", ()=> {
		it("Should created an SVG file using the circle function", () => {
			// arrange
			this.shapeColor = "blue";
			const circle = new Circle(this.shapeColor);
			const expectedResult = `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
			// act 
			const result = circle.render();
			// assert
			expect(result).toEqual(expectedResult);
		});
	});
});