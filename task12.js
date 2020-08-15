//Q12
n = window.prompt();
b = "";
function myfunc(n) {
  for (i = n; i >= 0; i--) {
    console.log(b + 10 ** i);
    b = b + "0";
  }
}
myfunc(n);
