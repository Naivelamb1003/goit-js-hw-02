function findLongestWord(string = "") {
  // Write code under this line
  const messageArray = string.split(" ");
  let longestWord = messageArray[0];
  for (let i = 0; i < messageArray.length; i += 1) {
    const firstItem = messageArray[i];
    if (firstItem.length > longestWord.length) {
      longestWord = firstItem;
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
