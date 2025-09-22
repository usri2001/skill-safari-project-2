const colors=["green","red","rgba(133,122,200)", "#f15025"];//created an array
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function()
{
//task
const randomNumber=getRandomNumber();
document.body.style.backgroundcolor=colors[randomNumber];
color.textcontent=colors[randomNumber];


});
function getRandomNumber()
{
    return  Math.floor(Math.random() * colors. length);
}