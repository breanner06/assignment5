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

const text3 = document.querySelector(".title");
const changeColor= document.querySelector(".changeColor");

changeColor.addEventListener('click', function (){
    text3.classList.toggle ("change");
})
