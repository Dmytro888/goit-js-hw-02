const findLongestWord = function(string) {
  let arrstring = string.split(' ');
  let wordLongest = '';
  for (let i = 0; i < arrstring.length; i += 1){
    if (wordLongest.length < arrstring[i].length)
      wordLongest = arrstring[i]
  }
  return wordLongest;
  }



console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you')); 

