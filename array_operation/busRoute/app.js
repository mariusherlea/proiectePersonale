let array = [
  { stop: "Cugir", ora: "7:00" },
  { stop: "Vinerea", ora: "7:10" },
  { stop: "Sibot", ora: "7:20" },
  { stop: "Balomir", ora: "7:25" },
  { stop: "Tartaria", ora: "7:30" },
  { stop: "VintuDeJos", ora: "7:40" },
  { stop: "AlbaIulia", ora: "7:50" },

  { stop: "AlbaIulia", ora: "8:00" },
  { stop: "VintuDeJos", ora: "8:10" },
  { stop: "Tartaria", ora: "8:20" },
  { stop: "Balomir", ora: "8:25" },
  { stop: "Sibot", ora: "8:30" },
  { stop: "Vinerea", ora: "8:40" },
  { stop: "Cugir", ora: "8:50" },

  { stop: "Cugir", ora: "9:00" },
  { stop: "Vinerea", ora: "9:10" },
  { stop: "Sibot", ora: "9:20" },
  { stop: "Balomir", ora: "9:25" },
  { stop: "Tartaria", ora: "9:30" },
  { stop: "VintuDeJos", ora: "9:40" },
  { stop: "AlbaIulia", ora: "9:50" },

  { stop: "AlbaIulia", ora: "10:00" },
  { stop: "VintuDeJos", ora: "10:10" },
  { stop: "Tartaria", ora: "10:20" },
  { stop: "Balomir", ora: "10:25" },
  { stop: "Sibot", ora: "10:30" },
  { stop: "Vinerea", ora: "10:40" },
  { stop: "Cugir", ora: "10:50" },
];

const perChunk = 7; // items per chunk

const result = array.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / perChunk);

  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = []; // start a new chunk
  }

  resultArray[chunkIndex].push(item);

  return resultArray;
}, []);

// console.log(result[1][1]);
// console.log(result[0]);
const establishSens = (result) => {
  let x = 0;
  var z = [];
  while (x < result.length) {
    let indexStart = result[x].findIndex((Object) => {
      return Object.stop === "VintuDeJos";
    });
    let indexFinish = result[x].findIndex((Object) => {
      return Object.stop === "Sibot";
    });
    if (indexStart < indexFinish) {
      console.log(indexStart, indexFinish, result[x]);

      z.push(result[x]);
    }
    x++;
  }
  return z;
};
let z = establishSens(result);

document.getElementById("list").innerHTML = JSON.stringify(z);
// console.log(array[(0, 1)]);
// console.log(array[(0, 0)]);
