//p: time in hours including decimal (8.6), he drinks 0.5 lites per hour
//r: return the number of litres nathan will drink, rounded to smallest value
//e: litres(2), 1, 'should return 1 litre'
  //litres(12.3), 6, 'should return 6 litres'
//p: take in an hour, round product of time * 0.5 to lowest integer
function litres(time) {
    return Math.floor(time * 0.5);
  }
