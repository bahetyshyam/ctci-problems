// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)

function isEven(a) {
  if (a % 2 === 0) {
    return true
  } else return false
}

function isPalindromePermutation(str) {
  str = str.replace(/\s+/g, '');
  // In this problem, we don't actually need to check the permutations at all
  // If we maintain the frequency/count of the strings, 
  // we can determine if the string's permutation will be a palindrome or not.
  // If the number of strings are even, then every character's count should be even.
  // eg. taccat
  // If the number of strings are odd, then one character's count should be 1, and others all should be even.
  // eg. tacocat
  const frequency = {};
  str.split('').forEach(char => {
    if(frequency[char]) {
      frequency[char] = frequency[char] + 1;
    } else {
      frequency[char] = 1
    }
  })
  if(isEven(str.length)) {
    return Object.keys(frequency).every(char => isEven(frequency[char]))
  } else {
    const frequencyObjectCopy = {...frequency};
    // the count is odd
    // get the key where the value is 1, then delete it
    // then perform the same check if every count is even or not
    let hasSingleCount = true;
    for(let char of Object.keys(frequency)) {
      if(frequency[char] === 1) {
        hasSingleCount = true;
        delete frequencyObjectCopy[char]
        break;
      }
    }
    return hasSingleCount && Object.keys(frequencyObjectCopy).every(char => isEven(frequency[char]))
  }
}

console.log(isPalindromePermutation('taco cat'))

// Example inputs
// 1. taccat
// 2. taco cat
// 3. tac cat
// 4. tacogcat
