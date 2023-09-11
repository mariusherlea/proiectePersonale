let nums = [-2, 1, -3, 4, -1, 2, 1, -5];

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
  sumItermedia = max;
  console.log(`Highest number is: ${max}`);
  console.log(`Highest number index is: ${index}`);

  let sumIntermediaLeft = 0;
  for (let j = array[index - 1]; (j = 0); j--) {
    sumIntermediaLeft = sumIntermediaLeft + array[j];
  }
  console.log(`sumIntermediaLeft: ${sumIntermediaLeft}`);
  let sumIntermediaRight = 0;
  //   for (let z = array[index - 1]; (z = array.length); z++) {
  //     sumIntermediaRight = sumIntermediaRight + array[z];
  //     console.log(`sumIntermediaRight: ${sumIntermediaRight}`);
  //   }
}

subarrayWithLargestSum(nums);
