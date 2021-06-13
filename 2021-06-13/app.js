//p: three arguments - operation(string/char), value1(number), value2(number)
//r: return result of numbers after applying the chosen operation.
//e: 
    //Examples(Operator, value1, value2) --> output
   //('+', 4, 7) --> 11
  //('-', 15, 18) --> -3
//p: take an operator, and apply that operator between 2 given numbers, return the result of that expression


function basicOp(operation, value1, value2){
    if (operation == '+'){
      return value1 + value2;
    } else if (operation == '-'){
      return value1 - value2;
    } else if (operation == '*'){
      return value1 * value2;
    } else if (operation == '/'){
      return value1 / value2;
    }
    }
    // could've also used a switch statement or eval!