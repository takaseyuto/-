
let OSlider = document.getElementById('OSlider');
OSlider.addEventListener('input', inputChange);
let PSlider = document.getElementById('PSlider');
PSlider.addEventListener('input', inputChange);
let QSlider = document.getElementById('QSlider');
QSlider.addEventListener('input', inputChange);
let RSlider = document.getElementById('RSlider');
RSlider.addEventListener('input', inputChange);
let Rs = document.getElementById('Rs');

let EPSSlider = document.getElementById('EPSSlider');
EPSSlider.addEventListener('input', inputChange);
let eps = document.getElementById('eps');

window.onload = () =>{
    Rs.innerText = 'y='+OSlider.value+'x^3 +'+PSlider.value+'x^2 +'+QSlider.value+'x +'+ RSlider.value + ' です';
    eps.innerText = 10**EPSSlider.value + ' です';
  }

function inputChange(event){
    Rs.innerText = 'y='+OSlider.value+'x^3 +'+PSlider.value+'x^2 +'+QSlider.value+'x +'+ RSlider.value + ' です';
    eps.innerText =  10**EPSSlider.value + ' です';
}
