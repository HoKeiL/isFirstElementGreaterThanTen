/**
 * Check if the first element of an number array is greater than ten
 * function: isFirstElementGreaterThanTen
 * @param a - array of number
 * if (first element is grester than 10){
 * return true
 * } else return false
 *
 * @returns boolean
 */
function isFirstElementGreaterThanTen(a: number[]): boolean {
  if (a[0] > 10) {
    return true;
  } else {
    return false;
  }
}

export default isFirstElementGreaterThanTen;
