
function App() {


    const a = ["A", "B", "C"]
    const b = ["1", "2", "3"]

    const ch = () => {
        if (document.getElementById("1") == 1) {
            return "ul";
        } else {
            return "ol";
        }

    }


    return (
        <div className="App" id="1">
            <ch>

            </ch>

        </div>

    );

}
export default App;