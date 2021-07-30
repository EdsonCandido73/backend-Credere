const MovementUtils = require ('../src/Utils/MovementUtils');

describe("Teste movements", () => {
  test('Testing right turn command', () => {
    expect(MovementUtils.default.nextDirection('C', 'GD')).toBe('D');
  })

  test('Testing left turn command', () => {
    expect(MovementUtils.default.nextDirection('D', 'GE')).toBe('C');
  })

  test('Testing move command x', () => {
    const direction = 'D'
    const x = 2
    const y = 1
    expect(MovementUtils.default.nextCoordinate(direction, x, y))
    .toEqual({"xCoordinate": 3, "yCoordinate": 1});
  })

    test('Testing move command y', () => {
    const direction = 'C'
    const x = 2
    const y = 1
    expect(MovementUtils.default.nextCoordinate(direction, x, y))
    .toEqual({"xCoordinate": 2, "yCoordinate": 2});
  })
})
