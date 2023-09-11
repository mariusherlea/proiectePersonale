let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function subarrayWithLargestSum(array) {
  let sumItermedia = 0;
  let max = 0;
  let index = array[0];
  for (let i = 0; i <= array.length - 1; i++) {
    if (Math.sign(array[i]) > 0) {
      if (max < array[i]) {
        max = array[i];
        index = i;
      }
    }
  }

  console.log(`Highest number is: ${max}`);
  console.log(`Highest number index is: ${index}`);
}

subarrayWithLargestSum(nums);
