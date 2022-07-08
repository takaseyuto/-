
let OSlider = document.getElementById('OSlider');
OSlider.addEventListener('input', inputChange);
let Os = document.getElementById('Os');
let PSlider = document.getElementById('PSlider');
PSlider.addEventListener('input', inputChange);
let Ps = document.getElementById('Ps');
let QSlider = document.getElementById('QSlider');
QSlider.addEventListener('input', inputChange);
let Qs = document.getElementById('Qs');
let RSlider = document.getElementById('RSlider');
RSlider.addEventListener('input', inputChange);
let Rs = document.getElementById('Rs');

function inputChange(event){
    Rs.innerText = 'y='+OSlider.value+'x^3 +'+PSlider.value+'x^2 +'+QSlider.value+'x +'+ RSlider.value + ' です';
}

window.onload = () =>{
    Rs.innerText = 'y='+OSlider.value+'x^3 +'+PSlider.value+'x^2 +'+QSlider.value+'x +'+ RSlider.value + ' です';
}