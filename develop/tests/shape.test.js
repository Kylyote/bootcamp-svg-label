// import the required class files for the test to function
const Shape = require('../lib/shape.js');

describe ("Shape", ()=> {
  describe ("render", ()=> {
		it("Should throw an error when called.", () => {
			// arrange
			const shape = new Shape();
			const err = "Child class must implement render() method"
			// act 
			const result = shape.render();
			console.log(result);
			// assert
			expect(result).toThrow(err);
		});
	});
});