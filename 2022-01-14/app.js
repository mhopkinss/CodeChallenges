//take in a number value, give back a string in the 00000 format

//value -> always a number, can be 0, max 5 digits

//return string in 00000 format, filling in the zeros based on value size

function solution(value){
    //check if value is === 0
      if(value === 0){
        return "Value is 00000"
      } else if (value > 9999){
        return `Value is ${value}`
      } else if (value > 999){
        return `Value is 0${value}`
      } else if (value > 99){
        return `Value is 00${value}`
      } else if (value > 9){
        return `Value is 000${value}`
      } else {
        return `Value is 0000${value}`
      }
      //if so, return "Value is 00000"
    //check if value>9999
      //if so, return `Value is ${value}`
    //check if value>999
      //if so, return `Value is 0${value}`
    //check if value>99
      //if so, return `Value is 00${value}`
    //check if value>9
      //if so, return `Value is 000${value}`
    //else return `Value is 0000${value}`
    }