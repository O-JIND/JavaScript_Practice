import { useState } from "react";

function App() {
    const [car, setcar] = useState("Car");
    const [col, setcol] = useState("Color");
    const [yr, setyr] = useState("Years");
    const [image, setimg] = useState("/logo512.png");
    const [cmt, setcmt] = useState("comment");

    const msg = `${car} : ${yr}년식. ${cmt} `;

    return (
        <div className="App">
            <h1>차량 정보 </h1>
            <p style={{ color: col }}>차종과 색상이 변경됩니다.</p>

            {/** entitiy는 html 특수 문자 표현 기법  */}
            차종변경 : &nbsp;
            <select value={car} onChange={(evt) => setcar(evt.target.value)}>
                <option value="-">Car</option>
                <option value="AvanteN">avanteN</option>
                <option value="Grenduer">Grenduer</option>
                <option value="Genesis">Genesis</option>
            </select>
            <br /><br />
            <select value={col} onChange={(evt) => setcol(evt.target.value)}>
                <option value="-">Color</option>
                <option value="#2F4F4F">Dark Slate</option>
                <option value="Pink">Pink</option>
                <option value="	#F4A460">Sandi Brown</option>

            </select>

            <br /><br />
            <select value={yr} onChange={(evt) => setyr(evt.target.value)}>
                <option value="-">Years</option>
                <option value="2025">2025</option>
                <option value="2020">2020</option>
                <option value="2010">2010</option>
            </select>
            <br /><br />
            <select value={image} onChange={(evt) => setimg(evt.target.value)}>
                <option value="-">Years</option>
                <option value="/Image/avanteN.png">avanteN</option>
                <option value="/Image/grenduer.png">Grenduer</option>
                <option value="/Image/Genesis.png">Genesis</option>
            </select>
            <br /><br />
            <select value={cmt} onChange={(evt) => setcmt(evt.target.value)}>
                <option value="-">comment</option>
                <option value="신차">comment25</option>
                <option value="쓸만함">comment20</option>
                <option value="폐차">comment10</option>
            </select>
            <p ><span style={{ color: col, fontSize: "40px" }}>{msg}</span></p>
            <p ><img src={image} width="600px" height="400px" /></p>
        </div>
    );

}
export default App;