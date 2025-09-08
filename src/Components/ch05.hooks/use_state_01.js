import { useState } from "react";

function App() {
    const [color, setcolor] = useState('skyblue')
    const [menu, setmenu] = useState('Old_fashioned')
    const [image, setimage] = useState('/Image/Old_fashioned.png')




    const changeToclick = () => {

        console.log(`현재 색상 : ${color}`);

        setcolor('blue');
        setmenu('Midori_Sour');
        setimage('/Image/Midori_Sour.png');


    }

    return (
        <div className="App">
            <h1>My favorite color is {color}</h1>
            {/* 외부 {} 기호는 jsx 표현시에 사용되는 중괄호*/}
            {/* 내부 {} 기호는 자바 스크립트 객체  표현시에 사용되는 중괄호*/}
            <span style={{ color: color, fontWeight: 'bold' }}>Color</span>
            <br /><br />
            <button onClick={() => { changeToclick() }}>
                클릭시 이미지 변경 {color}색상으로 변경
            </button>
            <br /><br />
            <h4 style={{ color: color, fontWeight: 'bold' }}>{menu}</h4>
            <img src={image} alt={menu} width="210" height="210" />
            {console.log(`바뀐 색상 : ${color}`)}

        </div>
    );

}
export default App;