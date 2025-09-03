function App() {
  let num = 10;
  num +=3;
  console.log('num : ' + num);

  let str = 'Obara';
  str= 'NI';
  console.log('str : ' +str);
  
  let arr= [];
  arr = [10,20,30,40]
  console.log('arr : ' +arr);


  let obj = {};//객체 생성
  obj = {name:'Kim',password:'abc123',age :20};
  console.log('obj : ' );
  console.log(obj );
  // {} block var는 function scope / let const 는 block scope
  if(true){
    let x1 = 10;
    var x2 = 20;
    console.log('x1 : ' +x1);
  }
    console.log('x2 : ' +x2);
    
    const x3 = 40;
    console.log('x3 : ' +x3);

    const str2 = 'greetings';
    console.log(str2);

    const arr2 = [2,3,5,7];
    console.log(arr2);

    const obj2 = {name: 'KK', password: 'ddd', gender: 'Male'};
    console.log(obj2);


  return (
    <div className="App">
      ECMAScrpt
    </div>
  );
}


export default App;
