import { Table } from "react-bootstrap";

function App({ contents, onClickToContent }) {

    const ClickToItem = (evt) => {
        const clk = Number(evt.target.parentNode.id);

        onClickToContent(clk)

        {/*event.target → 실제 클릭된 요소 (<td>)
        event.currentTarget → onClick을 건 요소 (<tr>)
        따라서 event.currentTarget.id 로 tr의 id를 가져올 수 있음. */}

    }

    const bodyList = contents.map((item) =>
    (< tr id={item.id} key={item.id} onClick={ClickToItem}>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{Number(item.price).toLocaleString()}</td>
        <td >{item.description}</td>
    </tr >));



    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
                {bodyList}
            </tbody>


        </Table>
    );

}
export default App;