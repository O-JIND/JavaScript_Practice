function App() {
    const KeyboardEvent = (param, evt) => {
        console.log(evt);

        console.log(`parameter : ${param}`);
        console.log(`event tpye : ${evt.type}`);
        console.log(`event element : ${evt.target}`);
        console.log(`ascii code : ${evt.keyCode}`);
        console.log(`input String : ${evt.key}`);
        console.log(`ctrl  : ${evt.ctrlkey}`);
        console.log(`alt  : ${evt.altkey}`);
        console.log(`shift  : ${evt.shiftkey}`);

        if (evt.keyCode >= 48 && evt.keyCode <= 57) {
            console.log('You enter the number');
        } else {
            console.log('You should enter the number');
        }

    }


    return (
        <div className="App">
            <h2>Key Event</h2>
            Key Down : <input onKeyDown={(evt) => KeyboardEvent('Yaru', evt)}
                onKeyUp={(evt) => KeyboardEvent('Yaru', evt)}
                onKey={(evt) => KeyboardEvent('Yaru', evt)} />
            <br />

        </div>
    );

}
export default App;