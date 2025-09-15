import { Form, InputGroup } from "react-bootstrap";
import Formstyle from '../css/Formstyle.css'


function App({ onSubmitInsert, categories }) {
    const comment = 'register';

    const SubmitData = (evt) => {
        evt.preventDefault();
        const formData = evt.target;
        onSubmitInsert(formData);
    }
    const si = categories.map((item) =>
        <option key={item.Eng} >{item.Kor}</option>
    );


    return (
        <div className="Createform">
            <h2>Create {comment}</h2>
            <form onSubmit={SubmitData} action='#'>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>Name</InputGroup.Text>
                    <Form.Control type='text' name='name' />
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>price</InputGroup.Text>
                    <Form.Control name='price' />
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>category</InputGroup.Text>
                    {/*category combo box active creation */}
                    <Form.Select name='category' >
                        <option value="-">-- Choose category</option>
                        {si}
                    </Form.Select >
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>stock</InputGroup.Text>
                    <Form.Control name='stock' />
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>image</InputGroup.Text>
                    <Form.Control name='image' />
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>description</InputGroup.Text>
                    <Form.Control as="textarea" name='description' />
                </InputGroup>
                <button type='submit'>{comment}</button>

            </form>
        </div>
    );
}

export default App;