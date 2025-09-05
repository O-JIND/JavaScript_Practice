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




    const getChange = () => {
        const val = document.getElementById("Choose").value;
        if (val === "Menu") {
            document.getElementById('table').setTag = "ul";
            return MenuList;
        }
        if (val === "Drink") {
            document.getElementById('table').setTag = "ol";
            return DrinkList;
        }
        return [];

    }



    const makeTable = () => {
        if (getChange == MenuList) {
            const myarr = MenuList;
        }
        else if (getChange == DrinkList) {
            const myarr = DrinkList;
        } else {
            return [];
        }

        return (<table id="table" >
            <thead>
                <tr>
                    <th>no</th>
                    <th>name</th>
                    <th>price</th>
                    <th>image</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>myarr.no</td>
                    <td>myarr.name</td>
                    <td>myarr.price</td>
                    <td><img scr="myarr.image" /></td>
                </tr>

            </tbody>
        </table>
        )
    }



    return (
        <div className="App">
            <header>
                <h2>Menu :</h2>
            </header>
            <select id="Choose" onChange={() => getChange}>
                <option value="-">Choose one</option>
                <option value="Menu">Menu</option>
                <option value="Drink">Drink</option>
            </select>
            <br />
            <ul>
                {makeTable}
            </ul>
        </div >
    );

}
export default App;