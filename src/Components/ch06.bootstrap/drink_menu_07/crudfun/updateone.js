import { Form, InputGroup } from "react-bootstrap";
import Formstyle from '../css/Formstyle.css'
import { useState } from "react";


function App({ onSubmitUpdate, product, categories }) {
    const comment = 'Update';

    const [formData, setFormData] = useState(product)



    const SubmitData = (evt) => {
        evt.preventDefault();
        onSubmitUpdate(formData);
    }
    const InputChange = (evt) => {
        const { name, value } = evt.target;
        // setFormData(prev => ({ ...prev, [name]: value }));
        setFormData((previous) => {
            const updated = { ...previous, [name]: value };
            console.log("갱신된 값:", updated);
            return updated;
        });
    }

    const getCat = categories.map((item, idx) => (
        <option key={item.Eng} value={item.Kor} >{item.Kor}</option>
    ))



    return (
        <div className="Createform">
            <h2>Create {comment}</h2>
            <form onSubmit={SubmitData} action='#'>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>Id</InputGroup.Text>
                    <input name='id' type='hidden' onChange={InputChange} value={formData.id} disabled={true} />
                    <Form.Control
                        type='text'
                        name='fakeid'
                        onChange={InputChange}
                        value={formData.id}
                        disabled={true} />
                </InputGroup>

                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>Name</InputGroup.Text>
                    <Form.Control
                        type='text'
                        name='name'
                        onChange={InputChange}
                        value={formData.name} />
                </InputGroup>

                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>price</InputGroup.Text>
                    <Form.Control
                        name='price'
                        onChange={InputChange}
                        value={formData.price} />
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>category</InputGroup.Text>
                    <Form.Select name='category' onChange={InputChange} >
                        <option value="-">-- Choose category</option>
                        {getCat}
                    </Form.Select >
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>stock</InputGroup.Text>
                    <Form.Control
                        name='stock'
                        onChange={InputChange}
                        value={formData.stock} />
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>image</InputGroup.Text>
                    <Form.Control
                        name='image'
                        onChange={InputChange}
                        value={formData.image} />
                </InputGroup>
                <InputGroup className='custom-input-text'>
                    <InputGroup.Text className='intext'>description</InputGroup.Text>
                    <Form.Control
                        as="textarea"
                        name='description'
                        onChange={InputChange}
                        value={formData.description} />
                </InputGroup>
                <button type='submit'>{comment}</button>

            </form>
        </div>
    );
}

export default App;