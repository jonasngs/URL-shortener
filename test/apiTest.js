const { expect } = require("expect");
const { generateShortURL } = require("../controller/shortenURL");


describe('Test generateShortId function', () => {
  it('generateShortId functions as expected', () => {
    const actualResult = generateShortURL();
    console.log(actualResult);
    expect(actualResult).to.equal('OK');
  });
});