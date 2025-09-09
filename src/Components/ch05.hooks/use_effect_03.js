import { useEffect, useState } from "react";

function App() {

    const [jsondata, setjsondata] = useState([]);

    const GetUrlData = () => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
            .then((respones) => respones.json())
            .then((data) => {/* data는 변환된 자바 스크립트 객체 */
                // console.log(data);
                setjsondata(data);

            });
    }

    useEffect(GetUrlData, [])

    const Datalist = () => {
        const sliceArray = jsondata.slice(0, 10);
        const a = sliceArray.map((item) => (
            <li id={item.id} > {item.title}(<a href={item.url}>{item.url}</a>)</li>
        ));

        return <ol>{a}</ol>;
    }

    return (
        <div className="App">
            <Datalist />
        </div>
    );

}
export default App;