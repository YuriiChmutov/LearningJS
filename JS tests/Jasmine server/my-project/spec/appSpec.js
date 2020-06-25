function squareDigits(num){//9119
	let stringNumber = num.toString();
	let result = "";

	while(num.toString().length > 1){
		let number = Math.floor(num / Math.pow(10, (num.toString().length - 1)))
		result += Math.pow(number, 2).toString();
		num = num % Math.pow(10, (num.toString().length - 1))
	}

	result += Math.pow(num, 2).toString();
	return parseInt(result);
}

//console.log(squareDigits(9119));


describe("test set",() => {
	it("Check is the result number", () => {
		const result = squareDigits(9119);
	  	expect(result).toMatch(/\d{1,}/); //toEqual(jasmine.any(Number));
	});

	it("Check is the result from 9119 will be 811181", () => {
		const result = squareDigits(9119);
		expect(result).toBe(811181);
	});

	it("Check is the result NaN", () => {
		const result = squareDigits(9119);
		expect(result).not.toBeNaN();
	});

	it("Check is the result", () => {
		const result = squareDigits(751392);
		expect(result).toBe(492519814);
	});
  });