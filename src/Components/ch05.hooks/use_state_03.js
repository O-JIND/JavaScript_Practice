import { useState } from "react";

function App() {
    const [car, setstates] = useState({
        car: 'Car',
        col: 'Color',
        yr: 'Years',
        image: 'Image',
        cmt: 'comment'
    });

    const transnew = (evt) => {
        const { name, value } = evt.target;//id = evt.target.id || value = evt.target.value 를 합친것
        setstates(prev => ({ ...prev, [name]: value }))
    }





    const msg = `${car.car} : ${car.yr}년식. ${car.cmt} `;





    return (
        <div className="App">
            <h1>차량 정보 </h1>
            <p style={{ color: car.col }}>차종과 색상이 변경됩니다.</p>

            {/** entitiy는 html 특수 문자 표현 기법  */}
            차종변경 : &nbsp;
            <select name='car' value={car.car} onChange={transnew}>
                <option value="-">Car</option>
                <option value="AvanteN">avanteN</option>
                <option value="Grenduer">Grenduer</option>
                <option value="Genesis">Genesis</option>
            </select>
            <br /><br />
            <select name='col' value={car.col} onChange={transnew}>
                <option value="-">Color</option>
                <option value="#2F4F4F">Dark Slate</option>
                <option value="Pink">Pink</option>
                <option value="	#F4A460">Sandi Brown</option>

            </select>

            <br /><br />
            <select name='yr' value={car.yr} onChange={transnew}>
                <option value="-">Years</option>
                <option value="2025">2025</option>
                <option value="2020">2020</option>
                <option value="2010">2010</option>
            </select>
            <br /><br />
            <select name='image' value={car.image} onChange={transnew}>
                <option value="-">Image</option>
                <option value="/Image/avanteN.png">avanteN</option>
                <option value="/Image/grenduer.png">Grenduer</option>
                <option value="/Image/Genesis.png">Genesis</option>
            </select>
            <br /><br />
            <select name='cmt' value={car.cmt} onChange={transnew}>
                <option value="-">comment</option>
                <option value="신차">comment25</option>
                <option value="쓸만함">comment20</option>
                <option value="폐차">comment10</option>
            </select>
            <p ><span style={{ color: car.col, fontSize: "40px" }}>{msg}</span></p>
            <p ><img src={car.image} width="600px" height="400px" /></p>
        </div>
    );

}
export default App;