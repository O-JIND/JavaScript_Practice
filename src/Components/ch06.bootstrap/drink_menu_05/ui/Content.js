import { Table } from "react-bootstrap";

function App({ contents, onClickToContent, categories }) {

    const ClickToItem = (evt) => {
        const clk = Number(evt.target.parentNode.id);

        onClickToContent(clk)

        {/*event.target → 실제 클릭된 요소 (<td>)
        event.currentTarget → onClick을 건 요소 (<tr>)
        따라서 event.currentTarget.id 로 tr의 id를 가져올 수 있음. */}

    }
    const bodyList = contents.map((item) => {
        const match = categories.find((cate) => cate.Eng === item.category);
        return (
            < tr id={item.id} key={item.id} onClick={ClickToItem}>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{Number(item.price).toLocaleString()}</td>
                <td className="text-center">
                    {match ? match.Kor : item.category}
                </td>
                <td >{item.description}</td>
            </tr >)
    })

    /**{contents.map((item, index)) = > p
        const match  = categories.find(cate) ...?)
        
       )}
       다중 택일 ?:; 대신 find 사용*/

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