// import the required class files for the test to function
const Shape = require('../lib/shape.js');

describe ("Shape", ()=> {
  describe ("render", ()=> {
		it("Should fail asking for user input", () => {
			// arrange
			const shape = new Shape();
			const err = "Child class must implement render() method"
			// act 
			expect(shape.render).toThrow(err);
			// assert
		});
	});
});