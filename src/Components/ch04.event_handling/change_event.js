function App() {

    const ChangeEvent = (evt) => {
        // const eventArray = [];
        // for (const e in evt) {
        //     eventArray.push(e);
        // }
        // console.log(eventArray);
        // console.log(`event type : ${evt.type}`);
        // console.log(`event target : ${evt.target}`);

        // console.log(`evt.target 내 속성 확인 `);
        // for (const item in evt) {
        //     console.log(`event type : ${item}`);
        // }

        const target_id = evt.target.id;
        const target_value = evt.target.value;
        console.log(target_id);
        if (target_id === "input_box") {
            console.log(`입력 상자 내용 : ${target_value}`);
        } else if (target_id === "drink_select") {
            console.log(`선택 상자 내용 : ${target_value}`);
            if (target_value === '-') {
                document.getElementById('image01').src = '';
                alert('보여줄 이미지를 선택하시오.')//alert + confirm + prompt
            } else {
                const image_url = target_value
                document.getElementById('image01').src = image_url;
                document.getElementById('image01').width = 200;
                document.getElementById('image01').height = 200;
            }
        } else { }



    }



    return (
        <div className="App">
            <h2>Change Events</h2>
            <br />
            <input id="input_box" onChange={ChangeEvent}></input>
            <br />
            <select id="drink_select" onChange={ChangeEvent}>//combo box
                <option value="-" >Choose One</option>
                <option value="Image/Midori_Sour.png" >Midori Sour</option>
                <option value="Image/tequila_sunrise.png" >Tequila SunRise</option>
                <option value="Image/ScrewDriver.png" >ScrewDriver</option>
                <option value="Image/Old_fashioned.png" >Old Fashioned</option>
                <option value="Image/Black_Russian.png" >Black Russian</option>
            </select>
            <br />
            {/*alt 속성은 해당이미지가 없을 때 보여주는 글자를 지정하는 속성이다. */}
            <img id="image01" src="" alt="No Image" />
        </div>
    );

}
export default App;