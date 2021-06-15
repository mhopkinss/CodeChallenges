//p: a name ("Sam Harris")
//r: the first inital of each name (S.H), with a dot in between
//e: Sam Harris => S.H
   //patrick feeney => P.F
//p:
function abbrevName(name){
    //create an array from the given names
    let anArr = name.split(' ');
    //find the first position of each element in the array, make it uppercase and return
    return `${anArr[0][0].toUpperCase()}.${anArr[1][0].toUpperCase()}`;
    }