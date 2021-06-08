//p: an array of numbers
//r: return a single number (each number squared, then add all nums together)
//e: squareSum([1,2]), 5) , squareSum([0, 3, 4, 5]), 50) , squareSum([]), 0)
//p: pass in an array, square each number, add all squared numbers together to get final result

function squareSum(numbers){
    let aMap = numbers.map(num => num * num)
    let final = aMap.reduce((x, y) => x + y, 0);
    return final;
}