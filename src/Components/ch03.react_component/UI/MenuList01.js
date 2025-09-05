function App() {
    const MenuList = [
        { id: 1, name: "Ragu pasta", image: "/Image/ragu_pasta.png", price: "24.99$", description: "진하게 끓인 고기 소스와 파스타를 함께 버무린 요리입니다. 뭉근하게 끓여 부드럽고 깊은 맛이 나며, 면과 소스가 잘 어우러져 풍미가 좋습니다." },
        { id: 2, name: "Nigiri", image: "/Image/nigiri.png", price: "30.99$", description: "초밥용 밥을 손으로 쥐어 모양을 만든 후 그 위에 신선한 재료를 올린 요리입니다. 재료 본연의 맛과 밥의 조화가 뛰어나며, 입안에서 부드럽게 녹는 식감이 특징입니다." },
        { id: 3, name: "MacNCheese", image: "/Image/macNcheese.png", price: "11.99$", description: "마카로니와 치즈 소스를 섞어 만든 미국식 요리입니다. 고소하고 짭짤한 치즈 맛이 일품이며, 따뜻하고 부드러운 식감으로 남녀노소 누구나 즐기기 좋습니다." },
        { id: 4, name: "Steak", image: "/Image/steak.png", price: "22.99$", description: "두툼하게 썬 고기를 겉은 바삭하고 속은 부드럽게 구운 요리입니다. 고기 본연의 육즙과 풍미가 살아있어 입안 가득 진한 맛을 느낄 수 있습니다." },
        { id: 5, name: "Salmon", image: "/Image/Salmon.png", price: "27.99$", description: "부드러운 살코기와 고소한 지방이 특징인 생선입니다. 구이, 회, 샐러드 등 다양한 방식으로 조리되며, 특유의 부드러운 식감과 고소한 맛이 일품입니다." }
    ];

    const getComment = (price) => {
        if (price > "30$") {
            return 'much expensive';
        } else if (price > "20$") {
            return 'SoSo';
        } else {
            return 'eaaaaazy'
        }

    }


    const trlist = MenuList.map((menu, id) =>
        <tr key={id}>
            <td width="30">{menu.id}</td>
            <td>{menu.name}</td>
            <td><img src={menu.image} /></td>
            <td>{menu.price}</td>
            <td>{getComment(menu.price)}</td>
            <td width="600">{menu.description}</td>
        </tr>


    );
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>image</th>
                    <th>price</th>
                    <th>Comment</th>
                    <th>description</th>
                </tr>

            </thead>
            <tbody>
                {trlist}
            </tbody>
        </table>
    );

}
export default App;