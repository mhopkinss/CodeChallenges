//p: a non-negative number (23456)
//r: return the digits of this number within an array in reverse order.
//e:   348597 => [7,9,5,8,4,3]
     //0 => [0]
//p: 
function digitize(n) {
        return String(n).split('').map(Number).reverse()
      }
//alternatively, this also works
function digitize(n) {
    //convert n to an array, reversed
    let anArr = n.toString().split('').reverse();
    //remove all occurances of quotes
      for (i = 0;i<anArr.length;i++){
      anArr[i] = parseInt(anArr[i]);
    }
    return anArr;
    }