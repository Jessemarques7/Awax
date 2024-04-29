
let totalSlides = document.querySelectorAll('.banner .slidearea').length;

let slide = document.querySelector('.banner .slide')
let sliders = document.querySelector('.banner .sliders');

let currentSlide = 0;

var pointerid1 = document.querySelector('#pointer1');
var pointerid2 = document.querySelector('#pointer2');
var pointerid3 = document.querySelector('#pointer3');

function pointer1() {
   // sliders.style.marginLeft = '0';

    currentSlide = 0

    pointerid1.classList.add('active')
    pointerid2.classList.remove('active')
    pointerid3.classList.remove('active')

    updateMargin()

}
function pointer2() {
   // sliders.style.marginLeft = '-100vw';

    currentSlide = 1

    pointerid2.classList.add('active')  
    pointerid1.classList.remove('active')
    pointerid3.classList.remove('active')

    updateMargin()

}
function pointer3() {
   // sliders.style.marginLeft = '-200vw';

   currentSlide = 2;

    pointerid3.classList.add('active')  
    pointerid1.classList.remove('active')
    pointerid2.classList.remove('active')

    updateMargin()

}
function goNext() {

    currentSlide++;
    if(currentSlide > (totalSlides-1)) { // totalSlides = 2
        pointer1();
    } else if(currentSlide === 1){
        pointer2();
    } else {
        pointer3();
    }
 
}
function updateMargin() {

    let sliderWidth = slide.clientWidth;
    let newMargin = (currentSlide * sliderWidth);
    sliders.style.marginLeft = 
        `-${newMargin}px`;
}

setInterval(goNext, 5000)




