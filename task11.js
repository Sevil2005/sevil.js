//Q11
var n = window.prompt();
var k = 0;
var m = n;
var s = 0;
while (n >= 1) {
  k = k + 1;
  n = n / 10;
}
for (i = 0; i <= k; i++) {
  a = m % 10;
  s = s + a * 2 ** i;
  m = Math.floor(m / 10);
}
console.log(s);
