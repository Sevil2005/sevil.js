//Q8
var cumle = window.prompt();
var soz = window.prompt();
var index = parseInt(window.prompt());
function InsertText(cumle, soz, index) {
  cumle.replace(cumle[index], soz);
  console.log(cumle);
}
InsertText(cumle, soz, index);
