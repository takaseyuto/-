let x;
/**
 * ニュートン法による根の計算
 */
function newton() {
    console.log("のニュートン法による数値計算");
    let a = 100.0;
    let b;
    console.log("初期値 a=" + a);
  
    while(1) {
      b = a - func_y(a) / func_z(a); // 式(1.9)
      console.log(b);
      if (Math.abs(a - b) <= EPS) break;  // 収束判定
      else a = b; 
    }
    console.log("ニュートン近似解 x = " + b);
  }
  
  function func_y(x) {//f(x)
    return OSlider.value*x*x*x+ PSlider.value*x*x +QSlider.value*x + RSlider.value*1 ;
  }
  
  function func_z(x) {//f'(x)
    return 3*OSlider.value*x*x+ 2*PSlider.value*x +QSlider.value*1;
  }
  
  let button2 = document.getElementById('clear');
  button2.addEventListener('click',() =>{
    newton();
  })
  
