import { Card } from 'react-bootstrap';


import Top from './ui/Top.js';
import Bottom from './ui/Bottom.js';
import Content from './ui/Content.js';
import { useState } from 'react';
import Switcher from './Switcher.js';

function App() {
    const title = 'My new Practice';
    const comment = 'by JinD';
    const message = '13579a';

    const [products, setproducts] = useState([
        { id: 1, name: "Ragu pasta2", price: 24000, category: 'food', stock: 111, image: "/Image/ragu_pasta.png", description: "진하게 끓인 고기 소스와 파스타를 함께 버무린 요리입니다. 뭉근하게 끓여 부드럽고 깊은 맛이 나며, 면과 소스가 잘 어우러져 풍미가 좋습니다." },
        { id: 2, name: "MacNCheese2", price: 16000, category: 'food', stock: 222, image: "/Image/macNcheese.png", description: "마카로니와 치즈 소스를 섞어 만든 미국식 요리입니다. 고소하고 짭짤한 치즈 맛이 일품이며, 따뜻하고 부드러운 식감으로 남녀노소 누구나 즐기기 좋습니다." },
        { id: 3, name: "Tequila SunRise", price: 16000, category: 'drink', stock: 333, image: "/Image/tequila_sunrise.png", description: "데킬라에 오렌지 주스와 그레나딘 시럽을 섞어 만듭니다. 붉은색 그라데이션이 마치 일출처럼 아름다워 보는 즐거움이 있습니다." },
        { id: 4, name: "Black Russian", price: 12000, category: 'drink', stock: 444, image: "/Image/Black_Russian.png", description: "보드카와 커피 리큐어를 섞어 만든 칵테일입니다. 커피의 진하고 쌉쌀한 맛과 보드카의 깔끔함이 어우러져 깊고 부드러운 맛이 납니다." }
    ]);

    const categorylist = [
        { Eng: 'food', Kor: '음식' },
        { Eng: 'drink', Kor: '마실거리' }
    ];
    const [categories, setcategories] = useState(categorylist);

    const [selected, setselected] = useState(1);
    const [mode, setMode] = useState('');



    const ClickArrived = (id) => {
        setselected(id);
        setMode('detail'); //Mode 전환
    }

    /* mode : 현재 상태의 mode 지정
    insert update delete read detail
    */

    const getProductById = () => {
        const filt = products.filter((item) => (
            item.id === selected
        ));
        return filt[0];
    }

    const getExceptData = (id) => {
        const filt = products.filter((item) => (item.id !== id))
        return filt;
    }
    //수정 할 상품 1개 정보 저장 

    const ModeChanged = (mode) => {
        setMode(mode); //Mode 전환

        if (mode === "Delete") {
            const deletedarr = getExceptData(selected)
            setproducts(deletedarr)
        }

    }


    const InsertedData = (formData) => {
        const newId = Math.max(...products.map((item) => item.id + 1));
        const newData = [{
            id: newId,
            name: formData.name.value,
            price: Number(formData.price.value),
            category: formData.category.value,
            stock: Number(formData.stock.value),
            image: formData.image.value,
            description: formData.description.value
        }];
        const newProduct = products.concat(newData)
        setproducts(newProduct);
        setMode('read')
    }



    const UpdatedData = (formData) => {
        const leftproducts = getExceptData(formData.id)
        setproducts(leftproducts.concat(formData));
        setMode('read');
    }
    const InsertCatgry = (formData) => {
        //parameter name : addcategory.js에서 참조
        const newCategory = { Eng: formData.Eng.value, Kor: formData.Kor.value };
        const totalCategory = categories.concat(newCategory)
        setcategories(totalCategory);
        setMode('read');
    }


    return (
        <div className="App">
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>
            <Card.Body>
                {/**onClickToContent props 가 return 후  ClickArrived가 동작*/}
                <Content contents={products} onClickToContent={ClickArrived} select={selected} categories={categories} />
            </Card.Body>
            <Card.Body>
                <Switcher
                    mode={mode}
                    productitem={getProductById()}
                    onSubmitInsert={InsertedData}
                    onSubmitUpdate={UpdatedData}
                    onSubmitGetCatgry={InsertCatgry}
                    categories={categories}
                />
            </Card.Body>
            <Card.Footer>
                <Bottom message={message} onClickToBottom={ModeChanged} />
            </Card.Footer>

        </div>
    );

}
export default App;