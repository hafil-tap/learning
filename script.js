const bu =document.getElementById("roll")
const l =document.getElementById("number")
let min=1;
let max=6
let randomNumber;bu.onclick=function(){
    randomNumber=Math.floor(Math.random()*max)+min;
    l.textContent=randomNumber;
}


