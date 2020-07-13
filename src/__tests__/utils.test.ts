import { randomNum } from "../utils";

test('Test utils.randomNum', () => {
  expect(randomNum()).toBeLessThanOrEqual(1)
  expect(randomNum()).toBeGreaterThanOrEqual(0)
  expect(randomNum(3)).toBeGreaterThanOrEqual(0)
  expect(randomNum(3)).toBeLessThanOrEqual(3)
  expect(randomNum(3, 10)).toBeLessThanOrEqual(10)
  expect(randomNum(3, 10)).toBeGreaterThanOrEqual(3)

})