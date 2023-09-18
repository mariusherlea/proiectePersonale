const calculateBMI = (height, weight) => {
  // The formula for BMI is weight in kilograms divided by height in meters squared
  const heightIMeter = height / 100;
  const bmi = weight / (heightIMeter * heightIMeter);
  return bmi;
};

console.log(calculateBMI(160, 60));
