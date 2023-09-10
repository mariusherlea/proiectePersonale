let nums = [2, 7, 11, 15, 23, 24, 25];
let target = 17;

function check(array, sum) {
  let small = 0;
  let large = array.length - 1;

  do {
    let sumItermediar = array[small] + array[large];
    console.log(`sumItermediar intial: ${sumItermediar}`);
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
    } else {
      console.log(small, large);
      break;
    }
  } while (small != large);
}

check(nums, target);
