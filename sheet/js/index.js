let car = document.getElementById('car');
car.focus();

car.addEventListener('keydown' , function left(e){
if(e.key=="ArrowLeft"){
    car.style.position='relative';
    car.style.top='0rem';
    car.style.left='45rem';

}
})






