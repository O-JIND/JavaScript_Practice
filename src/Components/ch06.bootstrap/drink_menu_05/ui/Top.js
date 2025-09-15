import { Card } from "react-bootstrap";

function App({ title, comment }) {
    return (
        <Card>
            <Card.Title>
                <h3>{title}</h3>
                <p>{comment}</p>
            </Card.Title>
        </Card>
    );
}

export default App;