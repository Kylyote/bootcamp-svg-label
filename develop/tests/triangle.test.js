// import the required class files for the test to function
const Triangle = require('../lib/triangle.js');

describe ("Triangle", ()=> {
  describe ("render", ()=> {
		it("Should created an SVG file using the polygon function", () => {
			// arrange
			this.shapeColor = "blue";
			const triangle = new Triangle(this.shapeColor);
			const expectedResult = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
			// act 
			const result = triangle.render();
			// assert
			expect(result).toEqual(expectedResult);
		});
	});
});