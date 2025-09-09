function App() {
    console.log('자바 스크립트 배열 관련 map 함수');
    const numbers = [4, 9, 1, 8, 4, 6, 24];


    function multiply(num) {
        return (10 * num).toFixed(2);
    }
    const result01 = numbers.map(multiply);
    console.log(result01);

    const result02 = [].map(multiply);
    console.log(result02);

    const twotimes = n => 2 * n;
    const result03 = numbers.map(twotimes);
    console.log(result03);


    const result04 = numbers.map(Math.pow);
    console.log(result04);


    const fruits = ['딸기', '복숭아', '자두', '수박', '망고', '망고스틴', '무화과']
    console.log(fruits);

    const result05 = fruits.map((item, index) => (<li key={index}>Nice {item} </li>));
    console.log(result05);

    const result06 = fruits.map((item, index) => {
        if (index % 2 === 0) {
            return <li key={index}>Nice {item} </li>;
        } else {
            return <li key={index}>Guttentak {item} </li>;
        }
    }
    );

    console.log(result06);


    const Jap = ['Tokyo', 'Osaka', 'Fukuoka', 'Sapporo', 'Kagoshima', 'Nagoya', 'Kyoto'];

    const mylength = 6;
    let min_length = [];

    Jap.map((place) => {
        if (place.length > mylength) {
            min_length.push(place);
        }
        return 0;
    });

    console.log(min_length);

    const customers = [
        { firstN: '민정', LastN: '김', age: 22 },
        { firstN: '유리', LastN: '조', age: 24 },
        { firstN: '원영', LastN: '장', age: 23 },
        { firstN: '예나', LastN: '최', age: 24 },
        { firstN: '이안', LastN: '정', age: 15 }
    ];
    //1명당 <li> tag
    function getCustomerOne(Cu, index) {
        const identify = Cu.age >= 19 ? '성인' : '미성년자';
        return (
            <li key={index}>
                {Cu.LastN} {Cu.firstN} 님, 나이 : {Cu.age}살 {identify}
            </li>
        );
    };
    //목록화 컴포넌트
    const CuList = () => {
        const mylist = customers.map(getCustomerOne);
        return <ol>{mylist}</ol>
    };

    //품목 리스트를 위한 컴포넌트 / <strong>
    const Items = () => {
        const ingre = [
            { name: 'Gpu', description: 'a specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display device. Its highly parallel structure makes it efficient for machine learning, video editing, and gaming, processing many pieces of data simultaneously. This enables complex mathematical calculations needed for rendering graphics and running AI algorithms.' },
            { name: 'Cpu', description: 'the primary component of a computer that acts as its "brain," performing most of the processing inside the computer. It executes the instructions of a computer program, performing basic arithmetic, logic, controlling, and input/output (I/O) operations specified by the instructions. Unlike a GPU, a CPU is designed for general-purpose tasks and excels at handling a few complex operations sequentially' },
            { name: 'Ram', description: 'a type of computer memory that can be read from and written to in any order, typically used to store working data and machine code.  It\'s a volatile memory, meaning it requires power to maintain the stored information; its contents are lost when the power is turned off. Think of it as your computer\'s short-term memory, providing quick read and write access to the data your CPU needs to perform its tasks.' },
            { name: 'Pow', description: 'the component that supplies power to a computer.  Its primary function is to convert the high-voltage alternating current (AC) from a wall outlet into the low-voltage direct current (DC) that all the internal components of a computer require. It\'s crucial for system stability and performance, as it ensures every part of the PC receives the correct and consistent amount of power to operate.' }
        ];
        const itemList = ingre.map((item, index) => (
            <li key={index}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
            </li>
        ));

        return (
            <ul>
                {itemList}
            </ul>
        );

    };




    return (
        <div className="App">
            <h3>Simple</h3>
            <ul>{result05}</ul>

            <h3>Jap</h3>
            <ul>{result06}</ul>

            <h3>Customer List</h3>
            <CuList />

            <h3>Items List</h3>
            <Items />

        </div>
    );
}
export default App;