let car = document.getElementById("car");
// car.focus();
let margin = 70;
let Lpos = 520;

document.addEventListener("keydown", function move(e) {
  console.log(e.keyCode);

  if (e.keyCode == 37) {
    Lpos -= margin;
  } else if (e.keyCode == 39) {
    Lpos += margin;
  }
  // else if(pos<0 || pos>1040){
  //     break;
  // }
  if (Lpos < 260) {
    Lpos = 260;
  }

  if (Lpos > 788) {
    Lpos = 788;
  }
  // car.style.position = 'absolute';
  car.style.left = Lpos + "px";
  car.style.bottom = "0px";

  // setInterval(move,100);
});

let obs1 = document.getElementById("obs1");
let playarea = 570;
let Tpos = 10;

let obs1n = parseInt(obs1.style.top, 10);
console.log(obs1n);

let obs1nc = window.getComputedStyle(obs1).top;
console.log(obs1nc);

function obsanimate() {
  obs1.classList.remove("animateobs1");

  setTimeout(() => {
    obs1.classList.add("animateobs1");
  }, 10);
}

obsanimate();

setInterval(obsanimate, 4000);
