import { Component } from "react";
class App extends Component{
    //클라이언트가 데이터를 입력 받아서 화면에 그려주는 동작
    render(){
        console.log('class type component');
        return(
            <div className = "App">
                <div>클래스 방식 (JSX실습)</div>
                    <img src = "/croissant_03_bigsize.png"
                        width ="300" height = "300"/>
                        
                <div> Hi </div> 
            </div>   
        );
    }
   
}
//App을 외부로 참조가능하게
export default App; 