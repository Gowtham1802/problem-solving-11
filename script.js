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

// Test cases
console.log(firstNonRepeatingCharacter("programming")); // "r"
console.log(firstNonRepeatingCharacter("aabbcc")); // null
console.log(firstNonRepeatingCharacter("abcdef")); // "a"




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

// Test case
const nestedObject = {
  a: 1,
  b: { c: 2, d: { e: 3, f: 4 } },
  g: 5,
};

console.log(flattenObject(nestedObject));
// Output: { 'a': 1, 'b.c': 2, 'b.d.e': 3, 'b.d.f': 4, 'g': 5 }




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

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
