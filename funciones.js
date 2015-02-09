console.log('-----------------Funciones----------------');
function sumTwoNumbers(a, b, c) {
  var result = a + b;
  if (c) {
    result += c;
  }
  return result;
};
console.log(sumTwoNumbers(5, 6, 4));
console.log(sumTwoNumbers(4, 3, 3, 3) + ' ignora el 4to numero');
