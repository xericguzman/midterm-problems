function isEvenlyDivisible(a, b) {
  let result;
  if (a % b === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(isEvenlyDivisible(6, 3));

function halfSquare(number) {
  return (number * number) / 2;
}

function isLong() {
  return string.length >= 15;
}

function exclaim(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter === "!") {
      count++;
    }
  }
  const exclamationlessString = string.slice(0, string.length - count);
  return exclamationlessString + "!";
}

function countWords(string) {
  let numSpaces = 0;
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter === " ") {
      numSpaces++;
    }
  }
  return numSpaces + 1;
}

function containsDigit(string) {
  let hasDigit = false;
  const validDigits = "1234567890";

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    const isDigit = validDigits.includes(letter);
    if (isDigit) {
      hasDigit = true;
    }
  }
  return hasDigit;
}

function containsLowerCase() {
  let hasLowerCase = false;
  const lowercaseDigits = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    const isLowerCase = lowercaseDigits.includes(letter);
    if (isLowerCase) {
      hasLowerCase = true;
    }
  }
  return hasLowerCase;
}

function containsUpperCase() {
  let hasUpperCase = false;
  const upperCaseDigits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    const isUpperCase = uppercaseDigits.includes(letter);
    if (isUpperCase) {
      hasUpperCase = true;
    }
  }
  return hasUpperCase;
}

function containsNonAlphanumeric(string) {
  let hasAlphaNumeric = false;
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    const isNonAlphaNumeric =
      !containsLowerCase(letter) &&
      !containsUpperCase(letter) &&
      !containsDigit(letter);
    if (isNonAlphaNumeric) {
      hasAlphaNumeric = true;
    }
  }
  return hasAlphaNumeric;
}

function containsSpace(string) {
  let hasSpace = false;

  for (const letter of string) {
    if (letter === " ") {
      hasSpace = true;
    }
  }
  return hasSpace;
}

function digits(number) {
  const output = [];
  const bannedCharacters = "-.";

  const str = number.toString();
  for (let i = 0; i < string.length; i++) {
    const character = str[i];
    if (!(character === "-" || character === ".")) {
      output.push(Number(character));
    }
  }
  return output;
}

function truncate(string) {
  return string.length >= 15 ? string.slice(0, 8) + "..." : string;
}

function isValidPassword(string) {
  const isValid =
    containsLowerCase(string) &&
    containsUpperCase(string) &&
    containsDigit(string) &&
    containsNonAlphanumeric(string) &&
    !containsSpace(string);
  return isValid;
}

function onlyPunchy(titles) {
  return titles
    .map((title) => exclaim(title))
    .filter((title) => !isLong(title));
}

module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
};
