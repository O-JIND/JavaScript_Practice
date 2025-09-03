function App(a,b){
   
   console.log('sample');
   const func01_1 = () => console.log('mee');
   const func01_2 = () => console.log('hoo');
   const func01_3 = () => 'Siuuuuuuu';
    func01_1();
    func01_2();
    console.log(func01_3());
    



   const func02 = a => a.length;
   console.log(func02('sd89989898djkj'));
   
   function func03_1(a, b) { return a + b; }
   const func03_2 = (a,b) => {return a%b;}
   const func04= (name) => {
    if(name==undefined){console.log('who are you?');
    }
    else{return `${name}`;}

   }
    const func5 = (a,b) =>a*b;
    console.log(func5(10,4));
   
   const adultCheck = (name ,age) => {
        let adult = `${age>19?'성인':'미성년자'}`;
            
            let msg = `${name}는 ${adult}입니다.`;
            console.log(msg);
   }
   
   console.log(adultCheck('이제동',33));
   

    let msg = `${func04('김씨')} , ${adultCheck(22)}`;
    console.log(msg);

    console.log(func02('킥라니'));



    console.log('\n반환타입이 객체인 경우');
    const func7 = (f,s) => {
        const result={add:f+s,mtfy : f*s};
        return result;
    }



    console.log(func7(30,20));
  
    console.log('대괄호 기호와 key이름을 이용하여 접근');
    console.log(func7(30,20)['add']);
    console.log(func7(30,20)['mtfy']);
    


    let ll = func7(30,20);
    console.log(ll.add);
    console.log(ll.mtfy);
    






    return(
        <div className = "App">
           Arrow function
        </div>   
    );
}
export default App;