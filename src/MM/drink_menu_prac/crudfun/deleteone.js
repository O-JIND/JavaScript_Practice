import { Form, InputGroup } from "react-bootstrap";



function App() {
    const DeleteDate = () => {



    }



    return (
        <div className="Createform">
            <h2>Create Product</h2>
            <form onSubmit={DeleteDate} action='#'>
                <InputGroup>
                    <InputGroup.Text>Name</InputGroup.Text>
                    <Form.Control></Form.Control>
                </InputGroup>

            </form>
        </div>
    );

}
export default App;