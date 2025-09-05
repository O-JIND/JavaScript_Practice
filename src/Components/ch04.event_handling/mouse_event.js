function App() {
    const image_small = 90;
    const image_big = 400;
    const image_path = '/Image';//public 폴더아래 image 폴더

    const MouseMoveEvent = (evt) => {
        const imageSrc = evt.target.src
        console.log(`현재 이미지 : ${imageSrc}`);

        document.getElementById('large_image').src = imageSrc;

    }
    return (
        <div className="App">
            <h2>Mouse Event</h2>
            <p>임의의 이미지에 마우스가 해당 영역으로 들어 가면 큰 이미지 영역에 해당 이미지가 보입니다.</p>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={`${image_path}/macNcheese.png`} alt="맥엔치즈" width={image_small} height={image_small} onMouseMove={MouseMoveEvent} />
                        </td>
                        {/*rowSpan , colSpan*/}
                        <td rowSpan="4" width={image_big}>
                            <img id="large_image" src="" alt="No image" width={image_big} height={image_big} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/nigiri.png`} alt="스시" width={image_small} height={image_small} onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/ragu_pasta.png`} alt="라구 파스타" width={image_small} height={image_small} onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`${image_path}/steak.png`} alt="스테이크" width={image_small} height={image_small} onMouseMove={MouseMoveEvent} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}
export default App;