
export default {
  hasValidMovements(movements: [string]) {
    const validMovements = ["M", "GD", "GE"];

    const invalidMovements = movements.filter(move => !validMovements.includes(move));
    
    return invalidMovements.length === 0 ;
  }
}
