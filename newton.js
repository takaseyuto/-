//ニュートン法による根の計算
let x,ax;
let v=0;
let b;

function newton() {
    console.log("のニュートン法による数値計算");
    let a = 100.0;
    
    console.log("初期値 a=" + a);
    var element = document.querySelector( '#graph2' );
    var Tangent = element.getContext( '2d' );
    while(1) {
      ax = a;
      b = a - func_y(a) / func_z(a); // 式(1.9)
      newtonta(v,b)
      Tangent.beginPath();
      Tangent.moveTo((ax+20)*(10),(func_y(a)-20)*(-10));
      Tangent.lineTo((b+20)*10,200);
      Tangent.strokeStyle = '#FF0000';
      Tangent.stroke()
      Tangent.strokeStyle = '#000000';
      Tangent.lineWidth = 1;
      if (Math.abs(a - b) <= 10**EPSSlider.value) {
        v++
        break;  //収束判定
      }else{
        a = b; 
        v++;
      } 
    }
    console.log("ニュートン近似解 x = " + b);
  }
  
  function func_y(x) {//f(x)
    return OSlider.value*x*x*x+ PSlider.value*x*x +QSlider.value*x + RSlider.value*1 ;
  }
  
  function func_z(x) {//f'(x)
    return 3*OSlider.value*x*x+ 2*PSlider.value*x +QSlider.value*1;
  }
  
  let button2 = document.getElementById('start2');
  button2.addEventListener('click',() =>{
    newton();
  })

  let draw2button = document.getElementById('draw2');
  draw2button.addEventListener('click',() =>{
    let x1=-20.0,y1=0,x2=0,y2=0;
      var canvas = document.querySelector( '#graph2' );
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

  let clear2button = document.getElementById('clear2');
  clear2button.addEventListener('click',() =>{
    var element = document.querySelector( '#graph2' );
    var context = element.getContext( '2d' );
    context.clearRect(0,0,400,400);
    context.beginPath();
    context.moveTo( 0, 200 );
    context.lineTo( 400, 200 );
    context.moveTo( 200, 0 );
    context.lineTo( 200, 400 );
    context.stroke();
    newtontaclear(v);
    v=0;
  })
  
  window.addEventListener('load', () => {
    var element = document.querySelector( '#graph2' );
    var context = element.getContext( '2d' );

    context.beginPath();
    context.moveTo( 0, 200 );
    context.lineTo( 400, 200 );
    context.moveTo( 200, 0 );
    context.lineTo( 200, 400 );
    context.stroke();
    });
