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

//animation for obs1

function obsanimate(element) {
  element.classList.remove("animateobs1");

  setTimeout(() => {
    element.classList.add("animateobs1");
  }, 10);
}

obsanimate(obs1);

setInterval(() => {
  obsanimate(obs1);
}, 5000);

//animation for obs2

let obs2 = document.getElementById("obs2");

function obsanimate2() {
  obs2.classList.remove("animateobs2");

  setTimeout(() => {
    obs2.classList.add("animateobs2");
  }, 2000);
}

obsanimate2();

setInterval(obsanimate2, 5500);

//animation for obs3

let obs3 = document.getElementById("obs3");

function obsanimate3() {
  obs3.classList.remove("animateobs3");

  setTimeout(() => {
    obs3.classList.add("animateobs3");
  }, 2500);
}

obsanimate3();

setInterval(obsanimate3, 6500);

//animation for obs4 

let obs4 = document.getElementById("obs4");

function obsanimate4() {
  obs4.classList.remove("animateobs4");

  setTimeout(() => {
    obs4.classList.add("animateobs4");
  }, 4000);
}

obsanimate4();

setInterval(obsanimate4, 8500);

//animation for obs5

let obs5 = document.getElementById("obs5");

function obsanimate5() {
  obs5.classList.remove("animateobs5");

  setTimeout(() => {
    obs5.classList.add("animateobs5");
  }, 5500);
}

obsanimate5();

setInterval(obsanimate5, 9500);

//animation for obs7

let obs7 = document.getElementById("obs7");

function obsanimate7() {
  obs7.classList.remove("animateobs7");

  setTimeout(() => {
    obs7.classList.add("animateobs7");
  }, 6500);
}

obsanimate7();

setInterval(obsanimate7, 10500);

// animation for obs 9

let obs9 = document.getElementById("obs9");

function obsanimate9() {
  obs7.classList.remove("animateobs9");

  setTimeout(() => {
    obs7.classList.add("animateobs9");
  }, 3500);
}

obsanimate9();

setInterval(obsanimate9, 7500);








