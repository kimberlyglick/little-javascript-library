// Write your function here:

const tipCalculator = (quality, total) => {
  let tipPercentage = undefined;
  switch (quality) {
    case 'bad':
      tipPercentage = .05;
      break;
    case 'ok':
      tipPercentage = .15;
      break;
    case 'good':
      tipPercentage = .2;
      break;
    case 'excellent':
      tipPercentage = .3;
      break;
    default:
      tipPercentage = .18;
  }
  return total * tipPercentage;
}

console.log(tipCalculator('good', 100))


