import { useState } from "react";

function App() {
    const [car, setcar] = useState("Car");
    const [col, setcol] = useState("Color");
    const [yr, setyr] = useState("Years");
    const [image, setimg] = useState("/logo512.png");
    const [age, setage] = useState("Car age");
    const [newn, setnewn] = useState("new name");//새로 생성 괄호안에 또 쓰기 위해

    const ChangeTest = (evnt) => {
        const targetId = evnt.target.id;
        const targetvalue = evnt.target.value;

        if (targetId === "car") {
            setcar(targetvalue)
        } else if (targetId === "col") {
            setcol(targetvalue)
        } else if (targetId === "yr") {
            setyr(targetvalue)
        } else if (targetId === "img") {
            setimg(targetvalue)
        } else if (targetId === "age") {
            setage(targetvalue)
        }
        //setcar(`${carMap.get(targetvalue)}(${targetvalue})`) newn = `${car}(${한국이름})`
    }
    const yrMap = new Map(
        ['2025', '신차']
        ['2020', '쓸만함']
        ['2010', '폐차']
    );

    const carMap = new Map(
        ['AvanteN', 'avanteN']
        ['Grenduer', 'Grenduer']
        ['Genesis', 'Genesis']
    );

    const msg = ` ${car} :  ${yr}년식이다. ${age}`;//newn

    return (
        <div className="App">
            <h1>차량 정보 </h1>
            <p style={{ color: col }}>차종과 색상이 변경됩니다.</p>

            {/** entitiy는 html 특수 문자 표현 기법  */}
            차종변경 : &nbsp;
            <select id="car" value={car} onChange={ChangeTest}>
                <option value="-">Car</option>
                <option value="Sonata">Sonata</option>
                <option value="Grenduer">Grenduer</option>
                <option value="Genesis">Genesis</option>
            </select>
            <br /><br />

            글자 색 : &nbsp;
            <select id="col" value={col} onChange={ChangeTest}>
                <option value="-">Color</option>
                <option value="Green">Green</option>
                <option value="#778899">Light Gray</option>
                <option value="#FF1493">Deep Pink</option>
            </select>
            <br /><br />


            제조 년도 : &nbsp;
            <select id="yr" value={yr} onChange={ChangeTest}>
                <option value="-">Years</option>
                <option value="2025" >2025</option>
                <option value="2020" >2020</option>
                <option value="2010" >2010</option>
            </select>
            <br /><br />

            이미지 : &nbsp;
            <select id="img" value={image} onChange={ChangeTest}>
                <option value="-">img</option>
                <option value="/Image/avanteN.png">avanteN</option>
                <option value="/Image/grenduer.png">Grenduer</option>
                <option value="/Image/Genesis.png">Genesis</option>
            </select>
            <br /><br />



            코멘트 : &nbsp;
            <select id="age" value={age} onChange={ChangeTest}>
                <option value="-">age</option>
                <option value="신차">2025</option>
                <option value="쓸만한차">2020</option>
                <option value="폐차수준">2010</option>
            </select>
            <p><span style={{ color: col }}>{msg}</span></p>
            <p ><img src={image} width="600px" height="400px" /></p>

        </div>

    );

}
export default App;