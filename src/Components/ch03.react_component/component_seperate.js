function Top() {


    return (
        <header>
            <h1>Pronounce</h1>
            Yop Guys
        </header>
    );
}
function Content() {


    return (
        <nav>
            <ul>
                <li><a href="https://www.google.com">Google</a></li>
                <li><a href="https://www.naver.com">Naver</a></li>
                <li><a href="https://www.daum.net">daum</a></li>
            </ul>
        </nav>
    );
}
function Bottom() {


    return (
        <article>
            <h2>close</h2>
            Bye Guys see you
        </article>
    );
}

/*
JSX 문법규칙
최상위 요소는 무조건 한개.
Tag들은 대소문자 구분을 한다.
Tag는 열기 닫기로 구성되어 있다.<p>  </p>
    사이에 내용이 없다면 < />로 사용가능
기존 HTML Tag 모두 사용가능.
개발자가 직접 만든 앱도 사용가능 
속성 작성은 이름 ="" 형식으로 작성
하위 앱으로 넘기는 props 역시 이름 ="" 형식으로 작성
*/

function App() {
    console.log('Seperate Component');
    //javascript coding page
    return (
        <div age="1800">
            <Top money="1000" />

        </div>
    );
}


export default App;