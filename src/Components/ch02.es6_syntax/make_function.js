function App(a,b){
    console.log('example');
    console.log('함수 선언문');
    function square(a,b){
        if(b==undefined){
            console.log('b: '+b);
            console.log('값 할당 X');
        }
        return(a**2)+(b**2);
    }
  
    let num = 2;
    let num1 = 3;
    let msg = 'result of ' +`square(${num},${num1})\n`;
    console.log(msg + square(num,num1));


    console.log(square(5));//b=undefined NaN : Not a Number
    

    console.log('\n함수 표현식');
    console.log('매개 변수는 기본값 할당 가능  ex)square(a ,b=5) ');

   const square2 = (function(a,b){return(a**2+b**2)})
    let num2 =4;
    let num3 =5;
    msg = 'result of ' +`square(${num2},${num3})\n`;
    console.log(msg + square(num2,num3));

    const square3 = (a,b) =>{
        return (a**2)+(b**2);
    }
    console.log(square3(3,7));
    

    return(
        <div className = "App">
           Sample
        </div>   
    );
};
export default App;