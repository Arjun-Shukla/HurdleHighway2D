let car = document.getElementById("car");
// car.focus();
let margin = 70;
let Lpos = 520;

document.addEventListener("keydown", function move(e) {
  // console.log(e.keyCode);

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
// let playarea = 570;
// let Tpos = 10;

// let obs1n = parseInt(obs1.style.top, 10);
// console.log(obs1n);

// let obs1nc = window.getComputedStyle(obs1).top;
// console.log(obs1nc);

//animation for obs1

let f1 = function obsanimate1() {
  obs1.classList.remove("animateobs1");

  setTimeout(() => {
    obs1.classList.add("animateobs1");
  }, 10);
};

f1();

let clear1 = setInterval(() => {
  f1();
}, 3500);

//animation for obs2

let obs2 = document.getElementById("obs2");

let f2 = function obsanimate2() {
  obs2.classList.remove("animateobs2");

  setTimeout(() => {
    obs2.classList.add("animateobs2");
  }, 3000);
};

f2();

let clear2 = setInterval(f2, 9000);

//animation for obs3

let obs3 = document.getElementById("obs3");

let f3 = function obsanimate3() {
  obs3.classList.remove("animateobs3");

  setTimeout(() => {
    obs3.classList.add("animateobs3");
  }, 2000);
};

f3();

let clear3 = setInterval(f3, 8000);

//animation for obs4

let obs4 = document.getElementById("obs4");

let f4 = function obsanimate4() {
  obs4.classList.remove("animateobs4");

  setTimeout(() => {
    obs4.classList.add("animateobs4");
  }, 2000);
};

f4();

let clear4 = setInterval(f4, 7000);

//animation for obs5

let obs5 = document.getElementById("obs5");

let f5 = function obsanimate5() {
  obs5.classList.remove("animateobs5");

  setTimeout(() => {
    obs5.classList.add("animateobs5");
  }, 2500);
};

f5();

let clear5 = setInterval(f5, 8500);

//animation for obs7

let obs7 = document.getElementById("obs7");

let f7 = function obsanimate7() {
  obs7.classList.remove("animateobs7");

  setTimeout(() => {
    obs7.classList.add("animateobs7");
  }, 10000);
};

f7();

let clear7 = setInterval(f7, 13000);

// animation for obs 9

let obs9 = document.getElementById("obs9");

let f9 = function obsanimate9() {
  obs9.classList.remove("animateobs9");

  setTimeout(() => {
    obs9.classList.add("animateobs9");
  }, 3000);
};

f9();

let clear9 = setInterval(f9, 8000);

//CAR CRASH LOGIC
// crash function

//obs1

function crash(car, obs, func, clearInt, xThreshold = 60, yThreshold = 10) {
  let carY = parseInt(car.getBoundingClientRect().top);
  let obsY = Math.abs(parseInt(obs.getBoundingClientRect().top));
  let carX = parseInt(car.getBoundingClientRect().left);
  let obsX = parseInt(obs.getBoundingClientRect().left);
  let offsetY = Math.abs(obsY - carY);
  let offsetX = Math.abs(obsX - carX);
  if (offsetY < yThreshold && offsetX <= xThreshold) {
    func = null;
    clearInterval(clearInt);
    obs.style.top = carY + "px";
  }
}

//obs1

setInterval(() => {
  crash(car, obs1, f1, clear1);
}, 50);

// crash logic for obs2

setInterval(() => {
  crash(car, obs2, f2, clear2);
}, 50);

// crash logic for obs3

setInterval(() => {
  crash(car, obs3, f3, clear3);
}, 50);

// crash logic for obs4

setInterval(() => {
  crash(car, obs4, f4, clear4);
}, 50);

// crash logic for obs5

setInterval(() => {
  crash(car, obs5, f5, clear5);
}, 50);

//crash logic for obs7

setInterval(() => {
  crash(car, obs7, f7, clear7);
}, 50);

// car crasj logic for obs9

setInterval(() => {
  crash(car, obs9, f9, clear9);
}, 50);

//   console.log(o1x);
//   console.log(offsetX1);

//   if (offsetY1 < 10 && offsetX1 <= 55) {
//     f1 = null;
//     clearInterval(clear1);
//     obs1.style.top = c1y + "px";
//   }
// }, 50);

//obs 2
// setInterval(() => {
//   let c2y = parseInt(car.getBoundingClientRect().top);
//   let o2y = Math.abs(parseInt(obs2.getBoundingClientRect().top));

//   let offsetY2 = Math.abs(o2y - c2y);

//   // console.log(cy);
//   // console.log(o1y);
//   // console.log(offsetY);

//   if(offsetY2<10) {
//   f2=null;
//   clearInterval(clear2);
//   obs2.style.top=c2y + "px";
//   }

// }, 50);

//obs3
// setInterval(() => {
//   let c3y = parseInt(car.getBoundingClientRect().top);
//   let o3y = Math.abs(parseInt(obs3.getBoundingClientRect().top));

//   let offsetY3 = Math.abs(o3y - c3y);

//   // console.log(cy);
//   // console.log(o1y);
//   // console.log(offsetY);

//   if(offsetY3<10) {
//   f3=null;
//   clearInterval(clear3);
//   obs3.style.top=c3y + "px";
//   }

// }, 50);

// //obs4
// setInterval(() => {
//   let c4y = parseInt(car.getBoundingClientRect().top);
//   let o4y = Math.abs(parseInt(obs4.getBoundingClientRect().top));

//   let offsetY4 = Math.abs(o4y - c4y);

//   // console.log(cy);
//   // console.log(o1y);
//   // console.log(offsetY);

//   if(offsetY4<10) {
//   f4=null;
//   clearInterval(clear4);
//   obs4.style.top=c4y + "px";
//   }

// }, 50);

// //obs5
// setInterval(() => {
//   let c5y = parseInt(car.getBoundingClientRect().top);
//   let o5y = Math.abs(parseInt(obs5.getBoundingClientRect().top));

//   let offsetY5 = Math.abs(o5y - c5y);

//   // console.log(cy);
//   // console.log(o1y);
//   // console.log(offsetY);

//   if(offsetY5<10) {
//   f5=null;
//   clearInterval(clear5);
//   obs5.style.top=c5y + "px";
//   }

// }, 50);

// //obs7
// setInterval(() => {
//   let c7y = parseInt(car.getBoundingClientRect().top);
//   let o7y = Math.abs(parseInt(obs7.getBoundingClientRect().top));

//   let offsetY7 = Math.abs(o7y - c7y);

//   // console.log(cy);
//   // console.log(o1y);
//   // console.log(offsetY);

//   if(offsetY7<10) {
//   f7=null;
//   clearInterval(clear7);
//   obs7.style.top=c7y + "px";
//   }

// }, 50);

// //obs9
// setInterval(() => {
//   let c9y = parseInt(car.getBoundingClientRect().top);
//   let o9y = Math.abs(parseInt(obs9.getBoundingClientRect().top));

//   let offsetY9 = Math.abs(o9y - c9y);

//   // console.log(cy);
//   // console.log(o1y);
//   // console.log(offsetY);

//   if(offsetY9<10) {
//   f9=null;
//   clearInterval(clear9);
//   obs9.style.top=c9y + "px";
//   }

// }, 50);
