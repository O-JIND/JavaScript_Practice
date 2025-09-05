function App() {
    let i = 0;
    // event는 이벤트 객체
    const Clickevent01 = (event) => {
        console.log('You OUT!');
        console.log(event);
    }
    const Clickevent02 = (name) => {
        const mg = `hello my name is ${name}`;

        console.log(mg);
    };
    const Clickevent03 = (fst, sec) => {
        const mg = `result is ${fst + sec}`;

        console.log(mg);
    };
    const Clickevent04 = (msg, evt) => {
        const mg = `message is ${msg}`;
        console.log(mg);
        {/*해당 이벤트가 보유하고 있는 속성(property) 목록을 저장할 배열 */ }
        const eventArray = [];
        for (const event in evt) {
            eventArray.push(event);
        }
        console.log('Property inform');
        console.log(eventArray);
        console.log(`event type : ${evt.type}`);
        console.log(`event occur element : ${evt.target}`);
    };
    const Clickevent05 = (evt) => {

        let myid = evt.target.id;
        if (evt.target.id === "register") {
            console.log("reg");
            i++;
            console.log(i);
        } else {
            console.log("Cancel");
            i--;
            console.log(i);
        }


        console.log(`event ${evt.target}`);


    };
    return (
        <div className="App">
            <h2>Click Event</h2>
            {/*매개변수가 0개일 경우 함수의 이름만 명시한다. */}
            {/* 해당 버튼을 클릭했을 때 함수가 동작.*/}
            <button onClick={Clickevent01}>매개변수 0</button><br /><br />
            {/*매개변수가 있는 경우 화살표 함수로 명시한다. */}
            <button onClick={() => Clickevent02('Karina')}>매개변수 1</button><br /><br />

            <button onClick={() => Clickevent03(1, 2)}>매개변수 2</button><br /><br />

            {/*이벤트 객체를 사용하고자 하는 경우*/}
            <button onClick={(evt) => Clickevent04('Yola', evt)}>이벤트 객체</button><br /><br />

            {/* */}
            <button id="register" onClick={(evt) => Clickevent05(evt)}>add</button><br />
            <button id="remover" onClick={(evt) => Clickevent05(evt)}>remove</button><br /><br />

        </div>
    );

}
export default App;