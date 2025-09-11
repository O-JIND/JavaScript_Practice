import { Form, InputGroup } from "react-bootstrap";
import Formstyle from '../css/Formstyle.css'
import { useState } from "react";


function App({ onSubmitUpdate, product }) {
    const comment = 'Update';

    const [formData, setFormData] = useState(product)



    const SubmitData = (evt) => {
        evt.preventDefault();
        onSubmitUpdate(formData);
    }
    const InputChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }


    return (
        <div className="Createform">
            <h2>Create {comment}</h2>
            <form onSubmit={SubmitData} action='#'>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>Id</InputGroup.Text>

                    <input name='id' type='hidden' onChange={InputChange} value={product.id} disabled={true} />

                    <Form.Control type='text' name='fakeid' onChange={InputChange} value={product.id} disabled={true} />
                </InputGroup>

                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>Name</InputGroup.Text>
                    <Form.Control type='text' name='name' onChange={InputChange} value={product.name} />
                </InputGroup>

                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>price</InputGroup.Text>
                    <Form.Control name='price' onChange={InputChange} value={product.price} />
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>category</InputGroup.Text>
                    <Form.Select name='category' onChange={InputChange} >
                        <option value="-">-- Choose category</option>
                        <option value="drink" selected={product.category === 'drink'}>Drink</option>
                        <option value="food" selected={product.category === 'food'} >Food</option>
                    </Form.Select >
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>stock</InputGroup.Text>
                    <Form.Control name='stock' onChange={InputChange} value={product.stock} />
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>image</InputGroup.Text>
                    <Form.Control name='image' onChange={InputChange} value={product.image} />
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>description</InputGroup.Text>
                    <Form.Control as="textarea" name='description' onChange={InputChange} value={product.description} />
                </InputGroup>
                <button type='submit'>{comment}</button>

            </form>
        </div>
    );
}

export default App;