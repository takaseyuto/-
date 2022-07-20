//2分法による根の計算
let c=0;
let i=0;

function nibunmain() {
    let a = -100.0,
    b = 100.0; // 初期値
    let x = nibun(a, b); // 解
    console.log("二分法近似解 x = " + x);
}


function nibun(a, b) {
    var element = document.querySelector( '#graph1' );
        var abc = element.getContext( '2d' );
    do {
        c = (a + b) / 2.0; // 2分計算
        nibunta(i,c);
        abc.beginPath();
        abc.moveTo((a+20)*10,0);
        abc.lineTo((a+20)*10,400);
        abc.strokeStyle = '#FF0000-';
        abc.stroke();
        abc.strokeStyle = '#000000';
        if (Math.sign(func_yn(c)) == Math.sign(func_yn(a))){ 
            a = c; // 式(1.2)
            abc.beginPath();
            abc.moveTo((b+20)*10,0);
            abc.lineTo((b+20)*10,400);
            abc.strokeStyle = '#0000FF';
            abc.stroke();
            abc.strokeStyle = '#000000';
            i++;
        } else {
            b = c;
            i++;
        } // 式(1.3)
    } while (Math.abs(a - b) > 10**EPSSlider.value); // 収束判別　式(1.4)の変形 
    return c;
}


function func_yn(x) {
    return OSlider.value*x*x*x+ PSlider.value*x*x +QSlider.value*x + RSlider.value*1;
}

let button1 = document.getElementById('start1');
button1.addEventListener('click',() =>{
    nibunmain();
})

let draw1button = document.getElementById('draw1');
draw1button.addEventListener('click',() =>{
    let x1=-20.0,y1=0,x2=0,y2=0;
    var canvas = document.querySelector( '#graph1' );
    var func_o = canvas.getContext('2d');
    
    for(let i=0;i<=400;i++){
        y1 = OSlider.value*x1*x1*x1+ PSlider.value*x1*x1 +QSlider.value*x1 + RSlider.value*1;
        x2 = x1+0.1;
        y2 = OSlider.value*x2*x2*x2+ PSlider.value*x2*x2 +QSlider.value*x2 + RSlider.value*1;
        func_o.beginPath();
        func_o.moveTo( (x1+20)*10 , (y1-20)*(-10));
        func_o.lineTo( (x2+20)*10 , (y2-20)*(-10));
        func_o.stroke();
        x1 = x2;
    }
})

let clear1button = document.getElementById('clear1');
    clear1button.addEventListener('click',() =>{
        var element = document.querySelector( '#graph1' );
        var context = element.getContext( '2d' );
        context.clearRect(0,0,400,400);
        context.beginPath();
        context.moveTo( 0, 200 );
        context.lineTo( 400, 200 );
        context.moveTo( 200, 0 );
        context.lineTo( 200, 400 );
        context.stroke();
        nibuntaclear(i);
        i=0;
  })

window.addEventListener('load', () => {
    var element = document.querySelector( '#graph1' );
    var context = element.getContext( '2d' );

    context.beginPath();
    context.moveTo( 0, 200 );
    context.lineTo( 400, 200 );
    context.moveTo( 200, 0 );
    context.lineTo( 200, 400 );
    context.stroke();
    });
