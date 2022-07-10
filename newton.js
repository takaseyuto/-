const EPS = 10**EPSSlider.value;
/**
 * ニュートン法による根の計算
 */
function newton() {
    console.log("x^3 + x - 1 のニュートン法による数値計算");
  
    let a = 1000.0;
    let b;
    console.log("初期値 a=" + a);
  
    while (1) {
      b = a - func_y(a) / func_z(a); // 式(1.9)
      console.log(b);
      if (Math.abs(a - b) < EPS) break;  // 収束判定
      else a = b;
    }
    console.log("近似解 x = " + b);
  }
  
  /** 
   * @param {number} x
   * @return {number} 
   */
  function func_y(x) {//f(x)
    return OSlider.value* Math.pow(x, 3.0)+ PSlider.value* Math.pow(x, 2.0) +QSlider.value* x + RSlider.value ;
  }
  
  /**
   * @param {number} x X座標
   * @return {number} Y座標
   */
  function func_z(x) {//f'(x)
    return 3*OSlider.value*Math.pow(x, 2.0)+ 2*PSlider.value*x +QSlider.value;
  }
  
    let button2 = document.getElementById('start');
    button2.addEventListener('click',() =>{
        //newton();
    })
  
