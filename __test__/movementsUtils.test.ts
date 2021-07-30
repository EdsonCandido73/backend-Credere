const movementUtils = require ('../src/Utils/movementUtils');

describe("Test movements", () => {
  test('Testing right turn command', () => {
    expect(movementUtils.default.nextDirection('C', 'GD')).
    toBe('D');
  })

  test('Testing left turn command', () => {
    expect(movementUtils.default.nextDirection('D', 'GE')).
    toBe('C');
  })

  test('Testing move command x', () => {
    const direction = 'D'
    const x = 2
    const y = 1
    expect(movementUtils.default.nextCoordinate(direction, x, y)).
    toEqual({"xCoordinate": 3, "yCoordinate": 1});
  })

  test('Testing move command x', () => {
    const direction = 'E'
    const x = 2
    const y = 1
    expect(movementUtils.default.nextCoordinate(direction, x, y)).
    toEqual({"xCoordinate": 1, "yCoordinate": 1});
  })

  test('Testing move command y', () => {
    const direction = 'C'
    const x = 2
    const y = 1
    expect(movementUtils.default.nextCoordinate(direction, x, y)).
    toEqual({"xCoordinate": 2, "yCoordinate": 2});
  })
  
  test('Testing move command y', () => {
    const direction = 'B'
    const x = 3
    const y = 4
    expect(movementUtils.default.nextCoordinate(direction, x, y)).
    toEqual({"xCoordinate": 3, "yCoordinate": 3});
  })

})
