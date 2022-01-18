//take in a string, return 4 numbers that represent:
//1: how many uppercase letters
//2: how many lowercase letters
//3: how many numbers
//4: how many special characters

//return an array of these ^ numbers

function solve(s){
    let counter = [0,0,0,0]
   //loop through s
    for(let i=0;i<s.length;i++){
    //check if s[i] is upperCase
      if(s.toUpperCase() === s[i]){
        counter[0] += 1
      }else if(s.toLowerCase() === s[i]){
        counter[1] += 1
      }else if(typeof s[i] === 'number'){
        counter[2] += 1
      }else {
        counter[3] += 1
      }
      //if so, add +1 to counter[0]
    //check if s[i] is lowerCase
      //if so, add +1 to counter[1]
    //check if s[i] is a number
      //if so, add +1 to counter[2]
    //check if s[i] is a special char
      //if so, add +1 to counter[3]
    }
    //return counter
    return counter
  }
  