import { Table, Button, Dropdown, DropdownButton, ButtonGroup, ListGroup, Form } from "react-bootstrap";
function App({ contents, onClickToContent, categories, onOrderByClick, orderBy, onChangeCategory }) {

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
    const onClickorderby = (evt) => {
        evt.preventDefault();

        const targetId = evt.target.id;
        const orderColumnList = ['name', 'price', 'category']
        const isColumn = orderColumnList.includes(targetId);


        if (isColumn) {
            onOrderByClick(targetId, orderBy.ordering);
        } else {
            onOrderByClick(orderBy.column, targetId);
        }
    }

    const OrderColumn = "Column";
    const SortBycol = " Sortby"

    const comboBox = () => (
        categories.map((item) =>
            <option id={item.Eng} key={item.Eng} value={item.Eng}>{item.Kor}</option>
        )
    )
    const ChangedComboItem = (evt) => {
        const comboCat = evt.target.value;
        onChangeCategory(comboCat);
    }

    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        <td width="10%" valign="middle">
                            <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle variant="info" id="dropdown-split-basic" >
                                    {OrderColumn}
                                </Dropdown.Toggle>
                                <Dropdown.Menu id="column">
                                    <Dropdown.Item id='name' onClick={onClickorderby}>name</Dropdown.Item>
                                    <Dropdown.Item id='price' onClick={onClickorderby}>price</Dropdown.Item>
                                    <Dropdown.Item id='category' onClick={onClickorderby}>category</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown >
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Dropdown as={ButtonGroup}>
                                <Dropdown.Toggle variant="info" id="dropdown-split-basic" >
                                    {SortBycol}
                                </Dropdown.Toggle>
                                <Dropdown.Menu id="sortBy">
                                    <Dropdown.Item id='asc' onClick={onClickorderby}>asc</Dropdown.Item>
                                    <Dropdown.Item id='desc' onClick={onClickorderby}>desc</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown >
                        </td >
                        <td width="10%" valign="middle">
                            <ListGroup horizontal >
                                <ListGroup.Item>{OrderColumn} : {orderBy.column} </ListGroup.Item>
                                <ListGroup.Item>{SortBycol} : {orderBy.ordering} </ListGroup.Item>
                            </ListGroup>
                        </td>
                        <td width="20%">
                            <Form.Select name="category" onChange={ChangedComboItem}>
                                <option value="all">All</option>
                                {comboBox()}
                            </Form.Select>
                        </td>
                    </tr>
                </tbody>


            </Table>

            <Table striped bordered hover>
                <thead>
                    <tr align="center">
                        <th>name</th>
                        <th>price</th>
                        <th>category</th>
                        <th >description</th>
                    </tr>
                </thead>
                <tbody>
                    {bodyList}
                </tbody>


            </Table>

        </>
    );

}
export default App;