function App(){
    //ES5 ver
    let string1  = 'Greetings';
    let string2  = 'Hola';
    let greeting = string1 + ' '+string2;
    console.log('greeting : ' + greeting);

    
    let product = {name:'strawberry',price:30000};
    console.log(product);

    let multiLine = 'You\nknow?'
    console.log(multiLine);
    
    let value1 = 22;
    let value2 = 15;
    let boool = false;
    let oper = 'result : ' + (value1*value2) ;
    console.log(oper);


    let oper22 = boool ? 'true' : 'false';
    console.log(oper22);
    
    // toLocaleString() is change number to ,,in number by 3
    //ES6+ ver
    let string3  = 'Siuuuu';
    let string4  = 'Factos';
    greeting = `${string4}~~~${string3}`;
    console.log('greeting : ' + greeting);
    //use back tick like a printf
    product = {name:'Kiwii',price:10000};
    let total = `product : ${product.name} || price : ${product.price.toLocaleString()}`;
    console.log(total);

    multiLine =`
    You 
    Know??
    I
    Adore
    `
    console.log(multiLine);
    
    let value3 = 22;
    let value4 = 15;
    let boool2 = false;
    let operd = `result :  ${value3+value4}` ;
    console.log(operd);
    boool2 = 14>15;

    let sc = boool2?(value3*value4):(value3+value4)
    operd = `result :  ${sc}`
    console.log(operd);

    let disc = 20;
    let msg = `${((100-disc)/100*product.price).toLocaleString()}` ;

    console.log(msg);
    
    return (
        <div className = "App">
            탬플릿 문자열
        </div>
    );
}
export default App;