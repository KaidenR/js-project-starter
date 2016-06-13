
import timesTwo from './timesTwo'

describe('timesTwo()', () => {
	[
		[0,0],
		[1,2],
		[5,10],
		[100,200]
	].forEach(numbers => {
		it(`multiplies ${numbers[0]} by two`, () => {
			expect(timesTwo(numbers[0])).to.equal(numbers[1])
		});
	});
});