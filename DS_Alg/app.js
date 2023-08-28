const Array1 = ["a", "b", "c", "x"];
const Array2 = ["z", "y", "i"];

const Array3 = ["a", "b", "c", "x"];
const Array4 = ["z", "y", "a"];

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

function containCommonItem2(array1, array2){
//loop trough first array and create object where propertie === items in the array
//loo through second array and check if item in second array exists in created object
let map={};
for(let i=0; i<array1.length;i++){
    if(!map[array1[i]]){
        const item=array1[i];
        map[item]=true;
    }
}
console.log(map);

for(let j=0; j<array2.length;j++){
    if ()
}


}

containCommonItem2(Array1,Array2);