module.exports = function reverse (n) {
  let result;
  let str = '';
  let arr = [];
  let newStr;
  str = n + '';
  arr = str.split('').reverse();
  if(n < 0) {
    arr.pop();
  }
  newStr = arr.join('');
  result = newStr;
  return +result;
}
