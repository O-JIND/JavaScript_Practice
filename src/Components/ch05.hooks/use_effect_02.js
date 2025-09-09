import { useEffect, useState } from "react";

function App() {
    const imagesize = 400;
    const [count, setcount] = useState(0)//카운터 변수 counter variable num
    const [two, settwo] = useState(0)//카운터 변수
    const [fun, setfun] = useState(0)//카운터 변수
    const imagepath = "/Image/"
    const [image, setimage] = useState(`${imagepath}Black_Russian.png`);

    const arrImage = [
        'americano.png',
        'Midori_Sour.png',
        'tequila_sunrise.png',
        'Old_fashioned.png',
        'ragu_pasta.png',
        'ScrewDriver.png',
        'americano01_bigsize.png',
        'brioche_04_bigsize.png',
        'croissant_03_bigsize.png',
        'steak.png'
    ];

    const imageshoot = () => {
        const index = count % (arrImage.length - 1)
        const imagereal = arrImage[index]
        setimage(`${imagepath}${imagereal}`)

    }

    const Todo = () => {
        settwo(() => 2 * count);
        setfun(() => 3 * count + 1);
        imageshoot();

    }
    //최소 한번 랜더링  되고 나서, count가 바뀔때 마다 랜더링
    useEffect(Todo, [count]);


    return (
        <div className="App">
            <table style={{ border: '1px solid black' }}>
                <tbody>
                    <tr>
                        <td style={{ border: '3px solid black' }}>Counter</td>
                        <td style={{ border: '3px solid black' }}>{count}</td>

                    </tr>
                    <tr>
                        <td style={{ border: '3px solid black' }}> Twice</td>
                        <td style={{ border: '3px solid black' }}> {two}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '3px solid black' }}>Fun</td>
                        <td style={{ border: '3px solid black' }}>{fun}</td>

                    </tr>
                </tbody>
            </table>
            <hr />
            <button onClick={() => { setcount((count) => count + 1) }}>
                &nbsp; 카운트 + 1  &nbsp;
            </button>
            <div>
                <img src={image} alt="NO" width={imagesize} height={imagesize} />
            </div>
        </div>

    );

}
export default App;