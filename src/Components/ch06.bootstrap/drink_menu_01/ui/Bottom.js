import { ButtonGroup, Button } from 'react-bootstrap/';

function App({ message }) {

    return (
        <>
            {message}
            <br /><br />

            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
            </ButtonGroup>



        </>



    );

}
export default App;