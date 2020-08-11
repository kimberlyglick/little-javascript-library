// from: https://www.codecademy.com/paths/web-development/tracks/getting-started-with-javascript/modules/code-challenge-javascript-fundamentals/lessons/javascript-fundamentals-code-challenge/exercises/how-old

let currentYear = 2020;

const howOld = (age, yearToTest) => {
  let birthYear = currentYear - age;
  let calculatedAge = yearToTest - birthYear;

  if (calculatedAge > age) {
    return `You will be ${calculatedAge} in the year ${yearToTest}`;
  } else if (calculatedAge < 0) {
    return `The year ${yearToTest} was ${Math.abs(calculatedAge)} years before you were born`;
  } else {
    return `You were ${calculatedAge} in the year ${yearToTest}`;
  }
}


console.log(howOld(35, 1992));


/* Codecadamy solution is here: I like the addition of the get current date feature, and if using it as modular code keeping everything inside the function is wise. 

const howOld = (age, year) => {
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
  
    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
} */