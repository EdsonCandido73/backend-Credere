const coordinatesValidator = require('../src/Utils/CoordinatesValidator');

describe("Test if the coordinates are valid", () => {

  test('Testing valid coordinates', () => {
    expect(coordinatesValidator.default.hasValidCoordinates(1 ,2)).
    toBe(true);
  })
  
  test('Testing valid coordinates', () => {
    expect(coordinatesValidator.default.hasValidCoordinates(4 ,4)).
    toBe(true);
  })

  test('Testing invalid coordinates', () => {
    expect(coordinatesValidator.default.hasValidCoordinates(5 ,2)).
    toBe(false);
  })

  test('Testing invalid coordinates', () => {
    expect(coordinatesValidator.default.hasValidCoordinates(2 , -1)).
    toBe(false);
  })
})
