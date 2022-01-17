//take in a string, return another string such that 
//even-indexed and odd-indexed characters of s are
//grouped and groups are space-separated

//string -> always a string, can contain spaces, string upper/lower-case will remain same

//return a string of odd indices and even indices

function sortMyString(S) {
    let oddHolder = ''
    let evenHolder = ''
  //loop through s
    for(let i=0;i<S.length;i++){
      //if i === 0, count as even; do something here
      if(i === 0){
        //add s[i] to even holder var
        evenHolder += S[i]
        //if i % 2 === 0 its even; do something here
      } else if(i % 2 === 0){
        //add s[i] to even holder var
        evenHolder += S[i]
        //else; do something here
      } else {
        //add s[i] to odd holder var
        oddHolder += S[i]
      }
    }
    //return `${even} ${odd}`
    return `${evenHolder} ${oddHolder}`
  }