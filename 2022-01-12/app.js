//take a string that has mixed upper/lowercase letters, convert string
//to either uppercase or lowercase based on
//1: make as few changes as possible, 2:if the string contains equal number of 
//uppercase and lowercase letters,convert the string to lowercase.

//string -> always a string, never empty

//return string.toLowerCase() || string.toUpperCase()

//solve("code") -> "code"
//solve("CODe") -> "CODE"
//solve("COde") -> "code"

function solve(s){
    let upperHolder = ''
    let lowerHolder = ''
      //loop through string and check if char is upper or lower
    for(let i=0;i<s.length;i++){
      //add that (upper or lower) char to a holding var
      if(s[i].toUpperCase() === s[i]){
        upperHolder += s[i]
      } else {
        lowerHolder += s[i]
      }}
      //upper holding var.length VS lower holding var.length, do something
      if(upperHolder.length > lowerHolder.length){
        return s.toUpperCase()
      } else {
        return s.toLowerCase()
      }
  }