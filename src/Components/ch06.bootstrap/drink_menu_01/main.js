import { Card } from 'react-bootstrap';


import Top from './ui/Top.js';
import Bottom from './ui/Bottom.js';
import Content from './ui/Content.js';
import { useState } from 'react';


function App() {
    const title = '123456789a';
    const comment = '0987654321b';
    const message = '13579a';

    const [products] = useState([
        { id: 1, name: "Ragu pasta", price: 24000, category: 'food', stock: 111, image: "/Image/ragu_pasta.png", description: "진하게 끓인 고기 소스와 파스타를 함께 버무린 요리입니다. 뭉근하게 끓여 부드럽고 깊은 맛이 나며, 면과 소스가 잘 어우러져 풍미가 좋습니다." },
        { id: 2, name: "MacNCheese", price: 16000, category: 'food', stock: 222, image: "/Image/macNcheese.png", description: "마카로니와 치즈 소스를 섞어 만든 미국식 요리입니다. 고소하고 짭짤한 치즈 맛이 일품이며, 따뜻하고 부드러운 식감으로 남녀노소 누구나 즐기기 좋습니다." },
        { id: 3, name: "Tequila SunRise", price: 16000, category: 'drink', stock: 333, image: "/Image/tequila_sunrise.png", description: "데킬라에 오렌지 주스와 그레나딘 시럽을 섞어 만듭니다. 붉은색 그라데이션이 마치 일출처럼 아름다워 보는 즐거움이 있습니다." },
        { id: 4, name: "Black Russian", price: 12000, category: 'drink', stock: 444, image: "/Image/Black_Russian.png", description: "보드카와 커피 리큐어를 섞어 만든 칵테일입니다. 커피의 진하고 쌉쌀한 맛과 보드카의 깔끔함이 어우러져 깊고 부드러운 맛이 납니다." }
    ]);
    return (
        <div className="App">
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>
            <Card.Body>
                <Content contents={products} />
            </Card.Body>
            <Card.Footer>
                <Bottom message={message} />
            </Card.Footer>

        </div>
    );

}
export default App;