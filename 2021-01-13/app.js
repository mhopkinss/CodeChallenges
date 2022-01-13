//take in a string, if that string ends with something -> return true/ else return false

//string -> always a string, never an empty string, no funny biz
//return true || false

//solution('abcde', 'cde'), true
//solution('abcde', 'abc'), false


function solution(str, ending){
    //take string, check if "ending" is at the end of the string
    if(str.endsWith(ending)){
      return true
    }else {
      return false
    }
    //conditonal if 
    //endsWith, return true
    //else return false
  }