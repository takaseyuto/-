const EPS = 10**EPSSlider.value;

/**
* 2分法による根の計算
*/
function nibunmain() {
    let a = 1000.0,
    b = -1000.0; // 初期値

    console.log(OSlider.value+PSlider.value+QSlider.value+RSlider.value+"の2分法による数値計算");
    console.log("初期値 a=" + a);
    console.log("初期値 b=" + b);
    let x = nibun(a, b); // 解
    console.log("二分法近似解 x = " + x);
}


function nibun(a, b) {
    let c;
    do {
        c = (a + b) / 2.0; // 2分計算
        console.log(c);
        if (func_yn(c) <= 0) b = c; // 式(1.2)
        else a = c; // 式(1.3)
    } while (Math.abs(a - b) > EPS); // 収束判別　式(1.4)の変形
    return c;
}


function func_yn(x) {
    return OSlider.value*x*x*x+ PSlider.value*x*x +QSlider.value*x + RSlider.value*1;
}

let button1 = document.getElementById('start');
button1.addEventListener('click',() =>{
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