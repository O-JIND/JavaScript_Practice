import { ListGroup, Table } from "react-bootstrap";

function App({ contents }) {
    const size = 200
    const bodyList = contents.map((item, index) =>
    (< tr key={index}>
        <td >{item.id}</td>
        <td >{item.name}</td>
        <td className="text-center">{Number(item.price).toLocaleString()}</td>
        <td className="text-center">{item.category === 'drink' ? '음료' : '음식'}</td>
        <td className="text-center">{item.stock}</td>
        <td className="text-center"><img src={item.image} width={size} height={size} /></td>
        <td className="text-center">{item.description}</td>
    </tr >)
    )
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>category</th>
                    <th>stock</th>
                    <th>image</th>
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