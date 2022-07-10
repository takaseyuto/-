
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

window.onload = () =>{
    Rs.innerText = 'y='+OSlider.value+'x^3 +'+PSlider.value+'x^2 +'+QSlider.value+'x +'+ RSlider.value + ' です';
}

function inputChange(event){
    Rs.innerText = 'y='+OSlider.value+'x^3 +'+PSlider.value+'x^2 +'+QSlider.value+'x +'+ RSlider.value + ' です';
}


const EPS2 = 0.0001; // constは定数の定義

/**
* 2分法による根の計算
*/
function main() {
    let a = -100.0,
    b = 100.0; // 初期値

    console.log(PSlider+QSlider+RSlider+"の2分法による数値計算");
    console.log("初期値 a=" + a);
    console.log("初期値 b=" + b);
    let x = nibun(a, b); // 解
    console.log("近似解 x = " + x);
}

/**
* 実際の計算部分
* @param {number} a 計算範囲
* @param {number} b 計算範囲
* @return {number} 近似解
*/
function nibun(a, b) {
    let c;

    do {
        c = (a + b) / 2.0; // 2分計算
        console.log(c);
        if (func_y(c) * func_y(a) < 0) b = c; // 式(1.2)
        else a = c; // 式(1.3)
    } while (Math.abs(a - b) > EPS2); // 収束判別　式(1.4)の変形
    return c;
}

/**
* 根を求めたい関数
* @param {number} x X座標
* @return {number} Y座標
*/
function func_y(x) {
    return Math.pow(2, 3.0) + Math.pow(2,2 ) + 2- 2;
}

let button = document.getElementById('start');
button.addEventListener('click',() =>{
    main();
})



window.addEventListener('load', () => {
    var element = document.querySelector( '#graph1' );
    var context = element.getContext( '2d' );

    context.beginPath();
    context.moveTo( 0, 0 );
    context.lineTo( 200, 400 );
    context.stroke();
    });