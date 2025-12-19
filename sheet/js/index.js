let car = document.getElementById("car");
// car.focus();
let margin = 70;
let pos = 520;

document.addEventListener("keydown", function move(e) {
  console.log(e.keyCode);

  if (e.keyCode == 37) {
    pos -= margin;
  } else if (e.keyCode == 39) {
    pos += margin;
  }
  // else if(pos<0 || pos>1040){
  //     break;
  // }
  if (pos < 260) {
    pos = 260;
  } 
  
  if (pos > 788) {
    pos = 788;
  }
  // car.style.position = 'absolute';
  car.style.left = pos + "px";
  car.style.bottom = "0px";

  // setInterval(move,100);
});
