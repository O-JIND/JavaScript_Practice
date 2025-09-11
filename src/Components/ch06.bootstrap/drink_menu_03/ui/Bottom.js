import { ButtonGroup, Button } from 'react-bootstrap/';

function App({ message, onClickToBottom }) {

    const ClickMenu = (evt) => {
        const clkid = evt.target.id;
        onClickToBottom(clkid)
    }




    return (
        <>
            {message}
            <br /><br />

            <ButtonGroup aria-label="Basic example">
                <Button id="Create" variant="secondary" onClick={ClickMenu}>Create</Button>
                <Button id="Delete" variant="secondary" onClick={ClickMenu}>Delete</Button>
                <Button id="Update" variant="secondary" onClick={ClickMenu}>Update</Button>
                <Button id="AddCatg" variant="secondary" onClick={ClickMenu}>AddCatg</Button>
            </ButtonGroup>



        </>



    );

}
export default App;