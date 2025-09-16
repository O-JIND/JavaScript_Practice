import { Button, Card } from 'react-bootstrap';


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
        { id: 4, name: "Black Russian", price: 12000, category: 'drink', stock: 444, image: "/Image/Black_Russian.png", description: "보드카와 커피 리큐어를 섞어 만든 칵테일입니다. 커피의 진하고 쌉쌀한 맛과 보드카의 깔끔함이 어우러져 깊고 부드러운 맛이 납니다." },
        { id: 5, name: "Strawberry siru", price: 52000, category: 'cake', stock: 999, image: "/Image/Strawberrysiru.png", description: "성심당의 겨울 시즌 케이크입니다. 원래 이름은 '스트로베리 쇼콜라 케이크'였으나 '딸기 시루'로 바꾼 후 폭발적인 인기를 얻었습니다. 검은 브라우니 시트 위에 신선한 딸기와 생크림을 겹겹이 쌓아 올려 만듭니다." },
        { id: 6, name: "Mango siru", price: 43000, category: 'cake', stock: 999, image: "/Image/Mangosiru.png", description: "성심당의 여름 한정 케이크입니다. 부드러운 생크림과 달콤한 망고가 듬뿍 들어간 것이 특징이며, 망고 콩포트(망고 잼)가 들어있어 더욱 풍부한 맛을 냅니다." },
        { id: 7, name: "Vanilla Macaron", price: 2500, category: 'macaron', stock: 120, image: '/Image/vanilla_macaron.png', description: "부드럽고 달콤한 바닐라 크림이 들어 있는 프랑스식 디저트입니다. 겉은 바삭하고 속은 촉촉한 식감이 특징입니다." },
        { id: 8, name: "Strawberry Macaron", price: 2800, category: 'macaron', stock: 90, image: '/Image/strawberry_macaron.png', description: "상큼한 딸기 크림이 가득 들어 있는 마카롱으로, 달콤하면서도 상큼한 맛을 즐길 수 있습니다." }
    ]);

    const categorylist = [
        { Eng: 'food', Kor: '음식' },
        { Eng: 'drink', Kor: '마실거리' },
        { Eng: 'cake', Kor: '케익' },
        { Eng: 'macaron', Kor: '마카롱' }
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

    //sort function edit;  basic order by name asc 
    const [orderBy, setorderBy] = useState({ column: 'name', ordering: 'asc' });

    const Ordering = (orderInfo) => {
        const column = orderInfo.column;
        const method = orderInfo.ordering;
        const textColumns = ['name', 'category']
        const isCharacter = textColumns.includes(column)

        //if sorted columnn is a category column, replace korean then sort 
        products.sort((a, b) => {
            let aValue = a[column];
            let bValue = b[column];

            if (column === 'category') {
                const aCategory = categories.find(c => c.Eng === a.category)
                const bCategory = categories.find(c => c.Eng === b.category)

                aValue = aCategory ? aCategory.Kor : a.category;
                bValue = bCategory ? bCategory.Kor : b.category;

            } if (isCharacter) {
                return method === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
            } else {
                return method === "asc" ? aValue - bValue : bValue - aValue
            }
        })
    }




    const ClickOrderBy = (targetid, orderby_) => {
        const neworderInfo = { column: targetid, ordering: orderby_ };
        setorderBy(neworderInfo);
        Ordering(neworderInfo);

    }


    //field search function add
    const [filterCategory, setfilterCategory] = useState('all');
    const ChangeCategory = (sortcat) => {
        setfilterCategory(sortcat);

        // Ordering(orderBy)

    }

    const isFilteringNeeded = filterCategory && filterCategory !== 'all';

    const filteredProducts =
        isFilteringNeeded ?
            products.filter((item) => item.category === filterCategory) :
            products;

    return (
        <div className="App">
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>

            <Card.Body>
                {/**onClickToContent props 가 return 후  ClickArrived가 동작*/}
                <Content
                    contents={filteredProducts} onClickToContent={ClickArrived} select={selected}
                    categories={categories} onOrderByClick={ClickOrderBy} orderBy={orderBy}
                    onChangeCategory={ChangeCategory}
                />
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