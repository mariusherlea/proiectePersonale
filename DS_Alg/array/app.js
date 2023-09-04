class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    delete this.data[this.length - 1];
    this.length--;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
  }
}

// const newArray = new MyArray();
// newArray.push("Hi");
// newArray.push("you");
// newArray.push("!");

// newArray.push("are");
// newArray.push("nice");
// newArray.delete(2);
// console.log(newArray);

let MyString = "Hi My name is Marius";

function reverse(str) {
  let rev = [];
  for (let i = str.length - 1; i >= 0; i--) {
    rev.push(str.slice(i, i + 1));
  }

  return rev.join("");
}

// console.log(reverse(MyString));

function mergeStoredArray(ar1, ar2) {
  let mergeArray = [];
  for (let i = 0; i <= ar1.length - 1; i++) {
    for (let j = 0; j <= ar2.length - 1; j++) {
      if (ar1[i] < ar2[j]) {
        console.log(ar1[i]);
      } else if (ar1[i] > ar2[j]) {
        console.log(ar2[j]);
      }
    }
  }
  console.log(ar1[ar2.length]);
  // console.log(ar2.length);
}
mergeStoredArray([0, 3, 4, 31], [4, 6, 30]);
