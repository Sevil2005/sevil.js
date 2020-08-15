//Q10
var text = window.prompt();
var n = parseInt(window.prompt());
var a = text.length;
for (i = 0; i <= a; i = i + n) {
  console.log(text.slice(i, i + n));
}
