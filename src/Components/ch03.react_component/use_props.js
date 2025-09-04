import Top from './UI/Top2';
import Bottom from './UI/Bottom2';
import Content from './UI/Content2';

function App() {

    const drinkarr = [
        "Black Russian",
        "Midori Sour",
        "Old fashioned",
        "Screw Driver"
    ];
    const Menu = [
        "Steak",
        "Rague Pasta",
        "Mac N Cheese",
        "Nigiri",
    ];

    return (
        <div className="App">
            <Top greeting="Whisky & Morphin Bar " welcome="Welcome, Greetings!" />
            <Content type="ul" menus={drinkarr} />
            <hr />
            <Content type="ol" menus={Menu} />
            <Bottom bye="See ya" comment="Good Bye" />
        </div>
    );

}
export default App;