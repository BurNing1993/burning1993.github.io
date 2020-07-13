export function randomNum(min: number = 0, max: number = 1): number {
  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }
  return Math.round(Math.random() * (max - min) + min);
}