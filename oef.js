//oefening1
var x = document.getElementsByClassName("character");
var xchar = x[0];

document.addEventListener("keypress",kleur);


function kleur(){
var y = event.which-48;
switch (y){
  case 0 : xchar.style.background = "red";
  break;
  case 1 : xchar.style.background = "blue";
  break;
  case 2 : xchar.style.background = "red";
  break;
  case 3 : xchar.style.background = "yellow";
  break;
  case 4 : xchar.style.background = "black";
  break;
  case 5 : xchar.style.background = "red";
  break;
  case 6 : xchar.style.background = "blue";
  break;
  case 7 : xchar.style.background = "pink";
  break;
  case 8 : xchar.style.background = "purple";
  break;
  case 9 : xchar.style.background = "green";
  break;
  default : break;
}


}
//oefening 2
var up = document.getElementById("up");
var down = document.getElementById("down");
var left = document.getElementById("left");
var right = document.getElementById("right");

document.addEventListener("keypress",highlight);

function highlight(){
  var righting = event.which;
  console.log(righting);
  switch(righting){
    case 56 :up.classList.add("helderheid");
    break;
    case 50 : down.classList.add("helderheid");
    break;
    case 52: left.classList.add("helderheid");
    break;
    case 54: right.classList.add("helderheid");
    default : break;
  }

}

document.addEventListener("keyup",normal);

function normal(){
  var righting = event.which;
  console.log(righting);
  switch(righting){
    case 104 :up.classList.remove("helderheid");
    break;
    case 98 : down.classList.remove("helderheid");
    break;
    case 100: left.classList.remove("helderheid");
    break;
    case 102: right.classList.remove("helderheid");
    default : break;
  }

}
