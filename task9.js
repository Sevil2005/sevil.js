//Q9
var n = window.prompt();
var a = n % 10;
if (a == 1 || a == 2 || a == 5 || a == 7 || a == 8) {
  console.log(n + "-ci");
} else if (a == 3 || a == 4) {
  console.log(n + "-cü");
} else if (a == 6) {
  console.log(n + "-cı");
} else {
  console.log(n + "-cu");
}
