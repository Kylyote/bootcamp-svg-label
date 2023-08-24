// import the required class files for the test to function
const Square = require('../lib/square.js');

describe ("Square", ()=> {
  describe ("render", ()=> {
		it("Should created an SVG file using the square function", () => {
			// arrange
			this.shapeColor = "blue";
			const square = new Square(this.shapeColor);
			const expectedResult = `<rect x="90" y="45" width="120" height="120" fill="${this.shapeColor}" />`;
			// act 
			const result = square.render();
			// assert
			expect(result).toEqual(expectedResult);
		});
	});
});