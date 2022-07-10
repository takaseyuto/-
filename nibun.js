const EPS = 10**EPSSlider.value;

 // constは定数の定義

/**
* 2分法による根の計算
*/
function nibunmain() {
    let a = -1000.0,
    b = 1000.0; // 初期値

    console.log(OSlider.value+PSlider.value+QSlider.value+RSlider.value+"の2分法による数値計算");
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
    let c=0;
    do {
        c = (a + b) / 2.0; // 2分計算
        console.log(c);
        if (func_y(c) * func_y(a) <= 0) b = c; // 式(1.2)
        else a = c; // 式(1.3)
    } while (Math.abs(a - b) > EPS); // 収束判別　式(1.4)の変形
    return c;
}

/**
* 根を求めたい関数
* @param {number} x X座標
* @return {number}  Y座標
*/
function func_y(x) {
    return OSlider.value*Math.pow(x, 3.0)+ PSlider.value*Math.pow(x, 2.0 ) +QSlider.value*x + RSlider.value;
}

let button = document.getElementById('start');
button.addEventListener('click',() =>{
    nibunmain();
})

window.addEventListener('load', () => {
    var element = document.querySelector( '#graph1' );
    var context = element.getContext( '2d' );

    context.beginPath();
    context.moveTo( 0, 0 );
    context.lineTo( 200, 400 );
    context.stroke();
    });