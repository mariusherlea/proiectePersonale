// const Array1 = ["a", "b", "c", "x"];
// const Array2 = ["z", "y", "i"];

// const Array3 = ["a", "b", "c", "x"];
// const Array4 = ["z", "y", "a"];

// function containCommonItem(ar1, ar2) {
//   for (let i = 0; i < ar1.length; i++) {
//     for (let j = 0; j < ar2.length; j++) {
//       if (ar1[i] === ar2[j]) {
//         return true;

//       }
//     }
//   }
//   return false;
// }

// console.log(containCommonItem(Array1, Array2));
// console.log(containCommonItem(Array3, Array4));

//array1 ==> obj{
// a:true
// b:true
// c:true
//}

//array2[index]=obj.properties

// function containCommonItem2(array1, array2){
// //loop trough first array and create object where propertie === items in the array

// let map={};
// for(let i=0; i<array1.length;i++){
//     if(!map[array1[i]]){
//         const item=array1[i];
//         map[item]=true;
//     }
// }
// // console.log(map);
// //loo through second array and check if item in second array exists in created object
// for(let j=0; j<array2.length;j++){
//     if (map[array2[j]]){
//         return true
//     }
// }
// return false;

// }

// function containCommonItem3(arr1, arr2){
//     return arr1.some(item=>arr2.includes(item))

// }

// console.log(containCommonItem3(Array3,Array4));


sum = 7;
array = [1, 2, 6, 9];

let rightContor = array.length - 1;
let leftContor = 0;
while(rightContor!=leftContor){
	console.log (sumStart = array[leftContor] + array[rightContor]);
compare(sumStart,sum);
rightContor--;
console.log (sumEnds = array[leftContor] + array[rightContor]);
compare(sumEnds,sum);
leftContor++;
console.log (sumEnds2 = array[leftContor] + array[rightContor]);
compare(sumEnds2,sum);
rightContor--;
console.log (sumEnds3 = array[leftContor] + array[rightContor]);
compare(sumEnds3,sum);
leftContor++;
console.log (sumEnds4 = array[leftContor] + array[rightContor]);
compare(sumEnds4
	,sum);
}


function compare(sumArray,sum){
	if(sumArray===sum){
		console.log('Thast it '+sum+' '+sumArray)
	}
	else{
		return false;
	}
}