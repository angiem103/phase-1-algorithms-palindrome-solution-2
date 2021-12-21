function isPalindrome(word) {
  // This function should return either true or falls. When the input string is the same forward and backward it should return true. We have to compare the first and last letter and make sure they are the same. Same thing with the second letter and second to last and so on, until the middle of the word
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, return false
      return false;
    }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}

/* 
 iterate from the beginning of the string to the middle of the string,
 compare the letter we're iterating over to the corresponding letter at the end,
 if the letters don't match return false

 if we reach the middle, and all the letters match, return true.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log('Expecting: true')
  console.log('=>', isPalindrome('abba'))

  console.log('')

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
