var kidsWithCandies = function (candies, extraCandies) {
  let maxValue = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    ((maxValue - candies[i]) <= extraCandies) ? candies[i] = true : candies[i] = false;
  }
  return candies;
};