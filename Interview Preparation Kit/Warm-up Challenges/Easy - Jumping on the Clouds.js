/**
 * Title: Jumping on the Clouds
 * URL: https://www.hackerrank.com/challenges/jumping-on-the-clouds
 * Difficulty: Easy
 * Max Score: 20
 */

function jumpingOnClouds(c) {
  const count = c.join('').split(1).map((v) => (
    Math.ceil(`0${v}`.length / 2)
  )).reduce((a, v) => a + v);

  return count - 1;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
// Expected Result: 4

jumpingOnClouds([0, 0, 0, 1, 0, 0]);
// Expected Result: 3
