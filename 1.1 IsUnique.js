// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function isUnique(str) {
  // ASCII has character length of 128, so if it exceeds that, there are unique characters in the string
  if(str.length > 128) {
    return false;
  }
  const dictionary = {}
  for(let i = 0; i< str.length; i++) {
    if(str[i] in dictionary) {
      return false;
    } else {
      dictionary[str[i]] = 1;
    }
  }
  return true;
}

console.log(isUnique('abcdefgh'))
isUnique('abcdefgh')

// Example Inputs
// 1. abcdefgh -> true
// 2. abcdefa -> false
