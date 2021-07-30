const movementValidator = require('../src/Utils/movementValidator');

describe("Motion validator Test", () => {

  test('Testing valid move', () => {

    const dataReceivedRequest = ["M", "GE"];

    expect(movementValidator.default.hasValidMovements(dataReceivedRequest)).
    toBe(true);
  })

  test('Testing invalid move', () => {

    const dataReceivedRequest = ["GR", "M"];
    
    expect(movementValidator.default.hasValidMovements(dataReceivedRequest)).
    toBe(false);
  })
})
