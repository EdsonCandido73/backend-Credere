
export default {
  nextDirection(direction: string, turningDirection: string) {
    const directionChanges = new Map(
      [
        ['D' , {prev: 'C', next: 'B'}],
        ['B' , {prev: 'D', next: 'E'}],
        ['E' , {prev: 'B', next: 'C'}],
        ['C' , {prev: 'E', next: 'D'}],                
      ])

    const actual = directionChanges.get(direction);
    return (turningDirection==='GD') ? actual.next : actual.prev;
  },

  nextCoordinate(direction:string, x:number, y:number) {
    switch (direction) {
      case 'C': {
        y++;
        break;
      }
      case 'D': {
        x++;
        break;
      }
      case 'B': {
        y--;
        break;
      }
      case 'E': {
        x--;
        break;
      }
    }

    return {xCoordinate: x, yCoordinate: y};

  }
}