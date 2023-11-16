function sum(num) {
  if (num > 0) {
    return num + sum(num - 1); // 5+ sum(4)--->  5+4+ sum(3)---->  5+4+3+ sum(2)----> 5+4+3+2 +sum(1)----->  5+4+3+2+1 +sum(0)----> returns 15
  } else {
    return num;
  }
}
let num = 5;
let result = sum(num);
console.log(`The sum is ${result}`);
