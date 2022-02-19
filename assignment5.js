/*Loops and DOM
For Loop
While Loop
Change CSS with JS
Put it together (beyond the video)
Change CSS based upon a variable value
*/


let text1= "";
for (let i =1; i<=10; i++) {
    text1 += "The square of " + i + " is " + Math.pow(i, 2) + "<br>";
}
document.getElementById("square").innerHTML = text1;

let text2= "";
let i = 1;
while (i<=10) {
    text2 += "The square of " + i + " is " + Math.pow(i, 2) + "<br>";
    i++;
}
document.getElementById("square2").innerHTML = text2;

function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];
if (theme.getAttribute('href') == 'light.css') {
    theme.setAttribute('href', 'dark.css');
} else {
    theme.setAttribute('href', 'light.css');
}
}

/*var sheets = document.getElementsByTagName('link');
sheets[0].href = value;}
const h1 = document.querySelector(".title");
const h2 = document.querySelector(".title2");
const loopFields = document.getElementsByClassName(".loopFields");
const changeColor= document.querySelector(".changeStyle");

changeColor.addEventListener('click', function(){
    h1.classList.toggle ("changeH1"),
    h2.classlist.toggle ("changeH2"),
    loopFields.classlist.toggle ("changeLoopFields");
});
*/
window.addEventListener("resize", function(){
    document.getElementById("resizing").innerHTML = Math.random();
  });
