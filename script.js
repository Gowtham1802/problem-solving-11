age = 22;
console.log(age);


// 11. Implement a function to find the first non-repeating character in a string.
// function firstNonRepeatingCharacter(str) {
// // Implementation here

// }
// // Test cases
// console.log(firstNonRepeatingCharacter(&quot;programming&quot;)); // &quot;r&quot;
// console.log(firstNonRepeatingCharacter(&quot;aabbcc&quot;)); // null
// console.log(firstNonRepeatingCharacter(&quot;abcdef&quot;)); // &quot;a&quot;


function firstNonRepeatingCharacter(str) {
  // Create a hash map to store character counts
  const charCount = new Map();

  // Count the occurrences of each character
  for (const char of str) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // Find the first character with a count of 1
  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

console.log(firstNonRepeatingCharacter("programming"));
console.log(firstNonRepeatingCharacter("aabbcc")); 
console.log(firstNonRepeatingCharacter("abcdef")); 




// 12. Write a function that flattens a nested object, preserving the keys.
// function flattenObject(obj) {
// // Implementation here
// }
// // Test case
// const nestedObject = {
// a: 1,
// b: { c: 2, d: { e: 3, f: 4 } },
// g: 5,
// };
// console.log(flattenObject(nestedObject));
// // Output: { &#39;a&#39;: 1, &#39;b.c&#39;: 2, &#39;b.d.e&#39;: 3, &#39;b.d.f&#39;: 4, &#39;g&#39;: 5 }


function flattenObject(obj, parentKey = '') {
  let result = {};

  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      const flattened = flattenObject(obj[key], newKey);
      result = { ...result, ...flattened };
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

const nestedObject = {
  a: 1,
  b: { c: 2, d: { e: 3, f: 4 } },
  g: 5,
};

console.log(flattenObject(nestedObject));




// 13. Create a function to find the median of two sorted arrays.
// function findMedianSortedArrays(nums1, nums2) {
// // Implementation here
// }
// // Test cases
// console.log(findMedianSortedArrays([1, 3], [2]));// 2.0
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5


function findMedianSortedArrays(nums1, nums2) {
  // Merge the two sorted arrays into one
  const mergedArray = mergeSortedArrays(nums1, nums2);

  const length = mergedArray.length;

  // Calculate the median based on the length of the merged array
  if (length % 2 === 0) {
    // If the length is even, take the average of the middle two elements
    const mid1 = length / 2;
    const mid2 = mid1 - 1;
    return (mergedArray[mid1] + mergedArray[mid2]) / 2;
  } else {
    // If the length is odd, return the middle element
    const mid = Math.floor(length / 2);
    return mergedArray[mid];
  }
}

function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from both arrays (if any)
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

console.log(findMedianSortedArrays([1, 3], [2])); 
console.log(findMedianSortedArrays([1, 2], [3, 4]));




// 14. Write a function to convert a Roman numeral to an integer.

// function romanToInteger(s) {
// // Implementation here
// }
// // Test cases
// console.log(romanToInteger(&quot;III&quot;)); // 3
// console.log(romanToInteger(&quot;IV&quot;)); // 4
// console.log(romanToInteger(&quot;IX&quot;)); // 9
// console.log(romanToInteger(&quot;LVIII&quot;)); // 58



function romanToInteger(s) {
  // Create a mapping of Roman numeral characters to integer values
  const romanToIntMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;
  let prevValue = 0;

  // Iterate through the string from right to left
  for (let i = s.length - 1; i >= 0; i--) {
    const currentChar = s[i];
    const currentValue = romanToIntMap[currentChar];

    // If the current value is smaller than the previous one, subtract it
    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}

console.log(romanToInteger("III"));
console.log(romanToInteger("IV")); 
console.log(romanToInteger("IX")); 
console.log(romanToInteger("LVIII"));



// 15. Implement a function to reverse words in a sentence without reversing the characters within
// each word.
// function reverseWords(sentence) {
// // Implementation here
// }
// // Test cases
// console.log(reverseWords(&quot;Hello World&quot;)); // &quot;World Hello&quot;
// console.log(reverseWords(&quot;The quick brown fox&quot;)); // &quot;fox brown quick The&quot;


function reverseWords(sentence) {
  // Split the sentence into words using space as the delimiter
  const words = sentence.split(' ');

  // Reverse the order of the words
  const reversedWords = words.reverse();

  // Join the reversed words back into a sentence using space as the separator
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

console.log(reverseWords("Hello World")); 
console.log(reverseWords("The quick brown fox"));



// 16. Write a function to calculate the sum of all multiples of 3 or 5 below a given number.
// function sumMultiplesOf3And5(limit) {
// // Implementation here
// }
// // Test cases
// console.log(sumMultiplesOf3And5(10)); // 23 (3 + 5 + 6 + 9)
// console.log(sumMultiplesOf3And5(20)); // 78 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18)



function sumMultiplesOf3And5(limit) {
  let sum = 0;

  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumMultiplesOf3And5(10)); 
console.log(sumMultiplesOf3And5(20)); 




// 17. Implement a function that removes duplicates from an array without using built-in functions
// or additional data structures.
// function removeDuplicates(arr) {

// // Implementation here
// }
// // Test cases
// const originalArray = [1, 2, 2, 3, 4, 4, 5];
// removeDuplicates(originalArray);
// console.log(originalArray); // [1, 2, 3, 4, 5]



function removeDuplicates(arr) {
  // Check if the input array is empty or has only one element
  if (arr.length <= 1) {
    return;
  }

  // Sort the array (optional but helpful for this approach)
  arr.sort((a, b) => a - b);

  // Initialize a variable to keep track of the current index
  let currentIndex = 0;

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // If the current element is different from the previous element, move it to the next position
    if (arr[i] !== arr[currentIndex]) {
      currentIndex++;
      arr[currentIndex] = arr[i];
    }
  }

  // Modify the array in place to remove duplicates
  arr.length = currentIndex + 1;
}

const originalArray = [1, 2, 2, 3, 4, 4, 5];
removeDuplicates(originalArray);
console.log(originalArray); 



// 18. Implement a function to check if a given number is a perfect number (sum of its divisors
// excluding itself equals the number).
// function isPerfectNumber(num) {
// // Implementation here
// }
// // Test cases
// console.log(isPerfectNumber(6)); // true (1 + 2 + 3 = 6)
// console.log(isPerfectNumber(28)); // true (1 + 2 + 4 + 7 + 14 = 28)
// console.log(isPerfectNumber(12)); // false



function isPerfectNumber(num) {
  if (num <= 1) {
    return false;
  }

  let sumOfDivisors = 1; // Start with 1 since all numbers are divisible by 1

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sumOfDivisors += i;

      // If the divisors are not the same (i and num/i), add the other divisor as well
      if (i !== num / i) {
        sumOfDivisors += num / i;
      }
    }
  }

  return sumOfDivisors === num;
}

console.log(isPerfectNumber(6)); 
console.log(isPerfectNumber(28)); 
console.log(isPerfectNumber(12)); 



// 19. Create a function to find the intersection of two sorted arrays, allowing for duplicate
// elements.
// function intersectWithDuplicates(arr1, arr2) {
// // Implementation here
// }
// // Test cases
// console.log(intersectWithDuplicates([1, 2, 2, 3], [2, 2, 3, 4])); // [2, 2, 3]
// console.log(intersectWithDuplicates([3, 4, 2, 1, 5], [1, 3, 2])); // [3, 2, 1]



function intersectWithDuplicates(arr1, arr2) {
  const result = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

console.log(intersectWithDuplicates([1, 2, 2, 3], [2, 2, 3, 4])); 
console.log(intersectWithDuplicates([3, 4, 2, 1, 5], [1, 3, 2])); 



// 20. Implement a function to check if a given Sudoku board is valid.
// function isValidSudoku(board) {
// // Implementation here

// }
// // Test case
// const sudokuBoard = [
// [&quot;5&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
// [&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
// [&quot;.&quot;,&quot;9&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;],
// [&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;3&quot;],
// [&quot;4&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;],
// [&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;],
// [&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;8&quot;,&quot;.&quot;],
// [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;.&quot;,&quot;.&quot;,&quot;5&quot;],
// [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;9&quot;]
// ];
// console.log(isValidSudoku(sudokuBoard)); // true



function isValidSudoku(board) {
  // Check each row
  for (let row = 0; row < 9; row++) {
    if (!isValidRow(board[row])) {
      return false;
    }
  }

  // Check each column
  for (let col = 0; col < 9; col++) {
    if (!isValidColumn(board, col)) {
      return false;
    }
  }

  // Check each 3x3 subgrid
  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      if (!isValidSubgrid(board, row, col)) {
        return false;
      }
    }
  }

  return true;
}

function isValidRow(row) {
  const seen = new Set();

  for (const cell of row) {
    if (cell !== '.') {
      if (seen.has(cell)) {
        return false;
      }
      seen.add(cell);
    }
  }

  return true;
}

function isValidColumn(board, col) {
  const seen = new Set();

  for (let row = 0; row < 9; row++) {
    const cell = board[row][col];
    if (cell !== '.') {
      if (seen.has(cell)) {
        return false;
      }
      seen.add(cell);
    }
  }

  return true;
}

function isValidSubgrid(board, startRow, startCol) {
  const seen = new Set();

  for (let row = startRow; row < startRow + 3; row++) {
    for (let col = startCol; col < startCol + 3; col++) {
      const cell = board[row][col];
      if (cell !== '.') {
        if (seen.has(cell)) {
          return false;
        }
        seen.add(cell);
      }
    }
  }

  return true;
}

const sudokuBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(sudokuBoard));

