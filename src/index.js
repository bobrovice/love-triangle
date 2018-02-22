/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  preferences.forEach((triangle, i) => {
    if ((triangle -1 !=i) && (preferences[preferences[triangle-1]-1]-1 == i))
    count++
  });
  return count/3;
};
