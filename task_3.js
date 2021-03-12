function Calculator () {
  this.calculate = function (str) {
    values = str.split(' ');

    if (values[1] == '+') {
      result = Number(values[0]) + Number(values[2]);
    } else if (values[1] == '-') {
      result = +values[0] - +values[2];
    }

    return result;
  }
}

let calc = new Calculator;
console.log ('10 - 4 = ', calc.calculate('10 - 4'));
console.log ('10 + 4 = ', calc.calculate('10 + 4'));
