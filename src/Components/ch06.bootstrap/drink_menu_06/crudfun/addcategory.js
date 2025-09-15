import { Form, InputGroup } from "react-bootstrap";

function App({ onSubmitGetCatgry }) {
    const comment = 'register';

    const SubmitData = (evt) => {
        evt.preventDefault();
        const formData = evt.target;
        onSubmitGetCatgry(formData);
    }


    return (
        <div className="Createform">
            <h2>Create Category {comment}</h2>
            <form onSubmit={SubmitData} action='#'>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>Eng</InputGroup.Text>
                    <Form.Control type='text' name='Eng' />
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>Kor</InputGroup.Text>
                    <Form.Control name='Kor' />
                </InputGroup>
                <button type='submit'>{comment}</button>

            </form>
        </div>
    );

}
export default App;