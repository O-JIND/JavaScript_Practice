import { Col } from "react-bootstrap";

function App() {


    const a = [{
        id: 1,
        name: 2,
        class: 3,
        ma: 4,
        list: 6

    }]


    const aa = a.map((a) => a.Col)
    return (
        <div className="App" id="1">
            {console.log(aa)}

        </div>

    );

}
export default App;