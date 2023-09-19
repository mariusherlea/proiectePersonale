let array = [
  { stop: "Cugir", ora: "7:00" },
  { stop: "Vinerea", ora: "7:10" },
  { stop: "Sibot", ora: "7:20" },
  { stop: "Balomir", ora: "7:25" },
  { stop: "Tartaria", ora: "7:30" },
  { stop: "VintDeJos", ora: "7:40" },
  { stop: "AlbaIulia", ora: "7:50" },

  { stop: "AlbaIulia", ora: "8:00" },
  { stop: "VintDeJos", ora: "8:10" },
  { stop: "Tartaria", ora: "8:20" },
  { stop: "Balomir", ora: "8:25" },
  { stop: "Sibot", ora: "8:30" },
  { stop: "Vinerea", ora: "8:40" },
  { stop: "Cugir", ora: "8:50" },
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
  for (let i = 0; i < 2; i++) {
    let indexStart = result[i].findIndex((Object) => {
      return Object.stop === "Vint";
    });
    let indexFinish = result[i].findIndex((Object) => {
      return Object.stop === "Sibot";
    });
    if (indexStart < indexFinish) {
      // console.log(indexStart, indexFinish, result[i]);
      return result[i];
    }
  }
};

document.getElementById("list").innerHTML = JSON.stringify(
  establishSens(result)
);
// console.log(array[(0, 1)]);
// console.log(array[(0, 0)]);
