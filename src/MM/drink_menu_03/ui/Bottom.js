import { ButtonGroup, Button } from 'react-bootstrap/';

function App({ onClickToBottom }) {

    const ClickToBottom = (evt) => {
        const Clkid = String(evt.target.parentNode.id);
        console.log(Clkid);
        //id 반환

    }


    return (
        <>

            <br /><br />

            <ButtonGroup aria-label="Basic example">
                <Button id="insert" variant="secondary" onClick={ClickToBottom}>Insert</Button>
                <Button id="Delete" variant="secondary">Delete</Button>
                <Button id="Add" variant="secondary">Add</Button>
            </ButtonGroup>



        </>



    );

}
export default App;