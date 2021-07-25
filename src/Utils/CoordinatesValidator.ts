
export default {
  hasValidCoordinates(x:number , y:number) {
    if (x < 0 || y < 0 || x > 4 || y > 4) {
      return false;
    }    
    return true;
  }
}
