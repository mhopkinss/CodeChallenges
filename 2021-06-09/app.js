//counting sheep
//p: array of sheep
//r: the number of present sheep (true values)
//e: [true,  true,  true,  false,
  /*[true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]*/
  
  // return 17
//p: take in an array. Sort through array, see how many are true and store that value. Return that value.



function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep => sheep == true).length;
    }