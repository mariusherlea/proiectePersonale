let nums = [2, 7, 11, 15, 23, 24, 25];
let target = 50;

function checkIfElementOfArraySum(array, sum) {
  let smallestIndexOfArray = 0;
  let largetIndexOfArray = array.length - 1;

  do {
    let sumItermediar = array[smallestIndexOfArray] + array[largetIndexOfArray];

    if (sumItermediar < sum) {
      smallestIndexOfArray++;
      let sumItermediar =
        array[smallestIndexOfArray] + array[largetIndexOfArray];
      console.log(
        `smallestIndexOfArray increased:${smallestIndexOfArray} largetIndexOfArray stay ${largetIndexOfArray}`
      );
      console.log(`sumItermediar: ${sumItermediar}`);
    } else if (sumItermediar > sum) {
      largetIndexOfArray--;
      let sumItermediar =
        array[smallestIndexOfArray] + array[largetIndexOfArray];
      console.log(
        `largetIndexOfArray decreased ${largetIndexOfArray} smallestIndexOfArray stay ${smallestIndexOfArray}`
      );
      console.log(`sumItermediar: ${sumItermediar}`);
    } else {
      console.log(smallestIndexOfArray, largetIndexOfArray);
      break;
    }
  } while (smallestIndexOfArray != largetIndexOfArray);
}

checkIfElementOfArraySum(nums, target);
