import { useEffect, useState } from "react";

function App() {

    const imageSize = 500;
    const imagepath = "/Image/"
    const [count, setcount] = useState(0);
    const [image, setimage] = useState(`${imagepath}Black_Russian.png`);
    const interval = 500;
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

    const SomeAction = () => {
        setcount((count) => count + 1)
        let len = arrImage.length;
        const randomidx = Math.floor(Math.random() * len);
        const randomimage = arrImage[randomidx];
        setimage(`${imagepath}${randomimage}`)

    }

    const MyTimer = () => {
        setTimeout(SomeAction, interval)
    }
    useEffect((MyTimer), [count]);
    return (
        <>
            <h1>Counter : {count}</h1>
            <div>
                <img src={image} alt="Image" width={imageSize} height={imageSize} />
            </div>
        </>
    );

}
export default App;
