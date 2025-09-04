//넘겨진 props는 ()내에 적음
function App({ greeting, welcome }) {

    return (
        <header>
            <h2>{greeting}</h2>
            <p>{welcome}</p>
        </header>
    );

}
export default App;