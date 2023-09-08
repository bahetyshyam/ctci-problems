// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true pales, pale -> true pale, bale -> true pale, bake -> false Hints:#23, #97, #130

function oneAway(str1, str2) {
  const dictionary = {};
  str1.split('').forEach(char => {
    if(dictionary[char]) {
      dictionary[char] = dictionary[char] + 1;
    } else {
      dictionary[char] = 1
    }
  })

  str2.split('').forEach(char => {
    if(dictionary[char]) {
      dictionary[char] = dictionary[char] - 1;
    } else {
      dictionary[char] = 1
    }
  }) 
  deleteKeysWith0Value(dictionary)
  const arrayToCheck = Object.values(dictionary);

  if(str1.length === str2.length) {
    return arrayToCheck.length === 2 && arrayToCheck[0] === 1 && arrayToCheck[1] === 1
  } else {
    return arrayToCheck.length === 1 && arrayToCheck[0] === 1
  }
}

function deleteKeysWith0Value(dictionary) {
  const keys = Object.keys(dictionary);
  keys.forEach(key => {
    if(dictionary[key] === 0) {
      delete dictionary[key]
    }
  })
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'bake'))


//Question page 102