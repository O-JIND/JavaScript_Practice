function App() {

    const DrinksList = [
        { id: 1, name: "Midori Sour", image: "/Image/Midori_Sour.png", description: "메론의 달콤한 맛이 특징인 칵테일입니다. 신맛과 단맛이 조화롭게 어우러져 상큼하고 부드러운 느낌을 줍니다." },
        { id: 2, name: "Tequila SunRise", image: "/Image/tequila_sunrise.png", description: "데킬라에 오렌지 주스와 그레나딘 시럽을 섞어 만듭니다. 붉은색 그라데이션이 마치 일출처럼 아름다워 보는 즐거움이 있습니다." },
        { id: 3, name: "Americano", image: "/Image/americano.png", description: "캄파리와 스위트 베르무트를 소다수에 섞어 만듭니다. 쌉쌀하면서도 향긋한 허브 풍미가 느껴지며, 가볍고 청량한 맛이 특징입니다." },
        { id: 4, name: "Old Fashioned", image: "/Image/Old_fashioned.png", description: "위스키에 설탕, 비터즈, 물을 넣어 만드는 클래식 칵테일입니다. 위스키의 깊은 풍미와 달콤하고 씁쓸한 맛이 균형을 이루어 부드럽게 넘어갑니다." },
        { id: 5, name: "Black Russian", image: "/Image/Black_Russian.png", description: "보드카와 커피 리큐어를 섞어 만든 칵테일입니다. 커피의 진하고 쌉쌀한 맛과 보드카의 깔끔함이 어우러져 깊고 부드러운 맛이 납니다." }
    ];
    const trList = DrinksList.map((Drink, id) => (
        <tr key={id} >
            <td >{Drink.id}</td>
            <td ><strong>{Drink.name}</strong></td>
            <td ><img src={Drink.image} /></td>
            <td >{Drink.description}</td>

        </tr>
    ));

    const total =
        <table border="1">
            <thead>
                <tr>
                    <th width="30">ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th width="600">Description</th>
                </tr>
            </thead>
            <tbody>
                {trList}
            </tbody>
        </table>

    return (total);

}
export default App;