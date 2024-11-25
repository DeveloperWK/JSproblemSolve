/**
 * Problem 01 Start
 */
/**
 * Calculate the strike rate of a cricket player
 * given the number of runs scored and the number of balls faced
 * @param {number} run - The number of runs scored
 * @param {number} balls - The number of balls faced
 */
function calculateStrikeRate(run: number, balls: number) {
  // Calculate the strike rate by dividing the number of runs scored by the number of balls faced and multiplying by 100
  let strikeRate = ((run / balls) * 100).toFixed(2);

  console.log(`The strike rate is ${strikeRate}%`);
}
// Call the function with the number of runs scored and the number of balls faced as arguments
calculateStrikeRate(45, 30);

/**
 * Output: The strike rate is 150.00%
 */
/**
 * Problem 01 End
 */

// Problem 2 Start
function CountPairs(givenInput: string) {
  let count = 0;

  for (let i = 0; i < givenInput.length; i++) {
    if (/[a-z]/.test(givenInput[i]) && /\d/.test(givenInput[i + 1])) {
      if (parseInt(givenInput[i + 1]) % 2 == 0) {
        count += 1;
      }
    } else {
      continue;
    }
  }
  return count;
}

let result = CountPairs("a1b2c3d4e5f6");
console.log(result);
// Problem 2 End

// Problem 3 Start
function reverseString(str: string) {
  let rStr: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rStr += str[i];
  }
  console.log(rStr);
}

reverseString("GeeksforGeeks");
reverseString("JavaScript");
// Problem 3 End

// Problem 4 Start
function isPalindrome(str: string) {
  let palindrome = str.split("").reverse().join("");
  if (str === palindrome) {
    return true;
  }
  return false;
}

console.log(isPalindrome("rotator"));
// Problem 4 End
// Problem 5 Start
function mergeArrays(arr1: number[], arr2: number[]) {
  let margeArray = [...arr1, ...arr2];
  margeArray.sort((a, b) => a - b);

  return margeArray;
}

console.log(mergeArrays([1, 5, 2], [6, 8, 10]));
// Problem 5 End
// Problem 6 Start
function findShortestWord(srt: string) {
  let shortword = srt.split(" ").reduce((acc, current) => {
    return acc < current ? current : acc;
  });
  return shortword;
}

console.log(findShortestWord("Today is Monday"));
// Problem 6 End
// Problem 7 Start
const removeDuplicates = (students: string[]) => {
  let filterDAta: string[] = [];
  let exist: Set<string> = new Set();

  for (const student of students) {
    if (!exist.has(student)) {
      filterDAta.push(student);
      exist.add(student);
    }
  }
  return filterDAta;
};

console.log(
  removeDuplicates([
    "Zara",
    "Sadia",
    "Mahin",
    "Adnan",
    "Maisha",
    "Adnan",
    "Faiyaz",
  ])
);
// Problem 7 End
// Problem 9 Start
/**
 * Parses a list of parameters, separates numbers and non-numeric strings, and
 * returns a concatenated string of non-numeric strings followed by the sum of numbers.
 *
 * @param {...any} params - A list of parameters which may include numbers and strings.
 * @returns {string | number} - A string combining non-numeric strings and the sum
 * of numeric values, or just the concatenated string if no numbers are present.
 */
function parseString(...params) {
  let numbers = params.filter((param) => !isNaN(param));
  let str = params.filter((param) => isNaN(param));

  if (numbers.length > 0) {
    let numSub = numbers.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    let strSub = str.join(" ");
    return strSub ? `${strSub} ${numSub}` : numSub;
  } else {
    return str.join(" ");
  }
}
console.log(parseString("21", "50", "40"));
console.log(parseString("Hello", "Alpha"));
console.log(parseString("summer", "2022"));
// Problem 9 End

// Problem 10 Start
function getPositiveNumbers(arr: number[]) {
  let positive = arr.filter((num) => {
    return num > 0;
  });

  return positive;
}

console.log(getPositiveNumbers([2, -5, 10, 3, 8, -1, 0, 7]));
// Problem 10 End
// Problem 11 Start

function findMissingNumber(arr: number[]): number {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8]));
// Problem 11 End
// Problem 12 Start
function getMaxProduct(productArray: number[]): number | null {
  if (productArray.length <= 2) {
    console.log("Please provide an array that contains more than two values.");
    return null;
  }
  let max1 = 0;
  let max2 = 0;

  for (let num of productArray) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    }
  }
  let multifly = max1 * max2;
  return multifly;
}

console.log(getMaxProduct([2, 3]));
// Problem 12 End
// Problem 13 Start
function findPrimeNumbers(primeArray: number[]): number[] {
  function isPrime(num: number): boolean {
    let i = 2;
    if (num <= 1) return false;
    if (num === 2) return true;
    for (i; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return primeArray.filter(isPrime);
}
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = findPrimeNumbers(inputArray);
console.log(primes);
// Problem 13 End
// Problem 14 Start
function asterisk(usersInput: number) {
  let i = 1;
  for (i; i <= usersInput; i++) {
    let space = " ".repeat(usersInput - i);
    let pattern = "*".repeat(i) + "*".repeat(i - 1);
    console.log(space + pattern);
  }
}
asterisk(5);
// Problem 14 End

// Problem 15 Start
function palindromic(input: number) {
  let start = 0;
  let i = 0;
  for (i; i < input; i++) {
    let space = " ".repeat(input - i);
    let pattern = "";
    let j = 0;
    for (j; j < i; j++) {
      pattern += start + j;
    }
    let k = i - 2;
    for (k; k >= 0; k--) {
      pattern += start - k;
    }
    console.log(space + pattern);
    start += 1;
  }
}
palindromic(5);
// Problem 15 End

// function fibonacciSequence(): number[] {
//   let fibonacciNumbers: number[] = [0, 1];
//   while (fibonacciNumbers.length <= this.n) {
//     fibonacciNumbers.push(
//       fibonacciNumbers[fibonacciNumbers.length - 1] +
//         fibonacciNumbers[fibonacciNumbers.length - 2]
//     );
//   }

//   return fibonacciNumbers.slice(0, this.n);
// }
// let num = fibonacciSequence(8);
// console.table(num);

// console.log(isFibonacciNumber(8));

// Problem 16 Start
class FibonacciNumber {
  n: number;
  constructor(n: number) {
    this.n = n;
  }
  fibonacciSequence(): number[] {
    let fibonacciNumbers: number[] = [0, 1];
    while (fibonacciNumbers.length <= this.n) {
      fibonacciNumbers.push(
        fibonacciNumbers[fibonacciNumbers.length - 1] +
          fibonacciNumbers[fibonacciNumbers.length - 2]
      );
    }

    return fibonacciNumbers.slice(0, this.n);
  }
  isFibonacciNumber = (): boolean => {
    if (this.n < 0) return false;
    let a = 0;
    let b = 1;
    while (b < this.n) {
      let temp = a;
      a = b;
      b = temp + a;
    }
    return b === this.n;
  };
}

const number1 = new FibonacciNumber(8);
console.log(number1.fibonacciSequence());
const number2 = new FibonacciNumber(10);
console.log(number2.isFibonacciNumber());
// Problem 16 End
// Problem 17 Start
class MedianNumber {
  numOfArray: number[];
  constructor(numOfArray: number[]) {
    this.numOfArray = numOfArray;
  }
  findMedian(): number | string {
    this.numOfArray.sort((a, b) => a - b);
    const length = this.numOfArray.length;
    console.table(this.numOfArray);
    if (length % 2 === 0) {
      const mididx1 = length / 2 - 1;
      const mididx2 = length / 2;
      return (this.numOfArray[mididx1] + this.numOfArray[mididx2]) / 2;
    } else {
      const mididx = Math.floor(length / 2);
      return this.numOfArray[mididx];
    }
  }
}

const odd = new MedianNumber([5, 2, 8, 1, 9]);
console.log(odd.findMedian());
const even = new MedianNumber([4, 2, 7, 1, 9, 10]);
console.log(even.findMedian());
// Problem 17 End
// Problem 18 Start
function countCharacter(word: string): { [key: string]: number } {
  const charCount: { [key: string]: number } = {};
  for (let char of word) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}
console.log(countCharacter("Hello"));

// Problem 18 End
