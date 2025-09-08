function App() {

    const getChange = (evt) => {
        const where = evt.target.value;
        const dd = document.getElementById("checkinput").checked;
        if (where === "-") {
            alert("이동할 페이지를 선택해주세요")
        } else {
            document.getElementById("certification").action = where;
            // document.getElementById("certification").submit();
        }




    }


    const Submittt = (evt) => {
        const isckecked = document.getElementById("checkinput").checked;
        if (isckecked) {

            document.getElementById("certification").submit();

        } else {
            alert("Please Check")
            evt.preventDefault();
        }

    }




    return (
        <div className="App">
            <h2>Submit Event</h2>
            <form id="certification" onSubmit={Submittt} action={`https://www.naver.com`}>
                <select onChange={getChange} >
                    <option value="-">--이동할 곳을 선택해주세요</option>
                    <option value="https://www.naver.com">naver</option>
                    <option value="https://store.steampowered.com/">steam</option>
                    <option value="https://www.yahoo.co.jp/">yahoo-jp</option>
                </select>
                <br /><br />

                <input id="checkinput" type="checkbox" />check to move
                <br /><br />

                <input type="submit" value="전송하다" />
            </form>
        </div>
    );

}
export default App;