function App() {
    const MenuList = [
        { no: 1, name: "Americano", price: 11.99, image: '/Image/americano.png' },
        { no: 2, name: "Screw Driver", price: 7.99, image: '/Image/ScrewDriver.png' },
        { no: 3, name: "Tequila Sunrise", price: 14.99, image: '/Image/tequila_sunrise.png' },
        { no: 4, name: "Old Fashioned", price: 12.99, image: '/Image/Old_fashioned.png' },

    ];

    const DrinkList = [
        { no: 1, name: "Ragu Pasta", price: 24.99, image: '/Image/ragu_pasta.png' },
        { no: 2, name: "Nigiri", price: 49.99, image: '/Image/nigiri.png' },
        { no: 3, name: "Steak", price: 37.99, image: '/Image/steak.png' },
        { no: 4, name: "Mac N Cheese", price: 11.99, image: '/Image/macNcheese.png' },

    ];




    const getChange = (evt) => {
        const get = evt.target.id;
        const val = evt.target.value;
        if (val == "Drink") {

            return (
                val
            )
        } else if (get == "Menu") {
            return (
                val
            )
        } else {
            return ("")
        }




    }



    const makeTable = () => {
        const change = getChange.value;

        let arr = [];
        if (change == "Drink") {
            arr = DrinkList
        } else if (change == "Menu") {
            arr = MenuList
        } else { }


        const myarr = () => (
            arr.map((item, no) => (
                <tr key={no}>
                    <td>{item.no}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><img src={item.image} alt="NONO" /></td>
                </tr>

            ))
        )
        return (
            <tbody>
                {myarr()}
            </tbody>
        )
    }



    return (
        <div className="App">
            <header>
                <h2>Menu :</h2>
            </header>
            <select id="Choose" onChange={getChange}>
                <option value="-">Choose one</option>
                <option value="Menu">Menu</option>
                <option value="Drink">Drink</option>
            </select>
            <br />
            <table id="table" border="1" >
                <thead>
                    <tr>
                        <th>no</th>
                        <th>name</th>
                        <th>price</th>
                        <th>image</th>
                    </tr>
                </thead>
                {makeTable()}
            </table>
        </div >
    );

}
export default App;