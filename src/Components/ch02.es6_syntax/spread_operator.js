function App(){
    let arr1=['조유리','최예나'];
    let arr2=['장원영','안유진'];

    let merge1 = [arr1[0]+arr1[1]+arr2[0]+arr2[1]];
    let merge2 = arr1.concat(arr2);
    let merge3 = [].concat(merge2);
    //concat 두 문자열 합성
    console.log('merge1 : ' + merge1);
    console.log('merge2 : ' + merge2);
    console.log('merge3 : ' + merge3);
   
    let arr3=['딸기','망고'];
    let arr4=['복숭아','골드키위']; 

    let merge4 = [...arr3,...arr4]
    console.log('merge3 : ' + merge4);

    const arr5 = ['Tokyo','Osaka','Fukuoka','Sapporo','Kagoshima','Nagoya','Kyoto'];
    console.log(arr5);
    let [C01,C02,C03='Not Country',...others]=arr5;
    console.log(C01);
    console.log(C02);
    console.log(C03);
    console.log(others);
    
    const myCar = {brand:'Hyundai',model:'Sonata',color:'White'};
    console.log(myCar);
    
    const myUpdateCar = {type:'Middle',year:'2025',color:'Black'};
    console.log(myCar);

    const myCarInfo = {...myCar,...myUpdateCar};
    console.log(myCarInfo);
    


    return(
        <div className = "App">
           Spread operator
        </div>   
    );
}
export default App;