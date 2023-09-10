let nums = [2, 7, 11, 15, 23, 24, 25];
let target = 9;

function check(array, sum) {
  let small = 0;
  let large = array.length - 1;
  let sumItermediar = array[small] + array[large];
  console.log(`sumItermediar intial: ${sumItermediar}`);
  do {
    if (sumItermediar < sum) {
      small++;
      let sumItermediar = array[small] + array[large];
      console.log(`small increased:${small} large stay ${large}`);
      console.log(`sumItermediar: ${sumItermediar}`);
    } else if (sumItermediar > sum) {
      large--;
      let sumItermediar = array[small] + array[large];
      console.log(`large decreased ${large} small stay ${small}`);
      console.log(`sumItermediar: ${sumItermediar}`);
    }
    else (sumItermediar == sum) {
      console.log(small, large);
      break;
    }
  } while (small != large);
}

check(nums, target);
