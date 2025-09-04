//props를 배열 형식으로 넘겨 받기

function App({ type, menus }) {

    const ListTag = (type === 'ul') ? 'ul' : 'ol';

    return (
        <nav>
            <ListTag>
                {menus.map((menu, index) =>
                (<li key={index}>
                    <a href={`${index + 1}.html`}>{menu}</a>
                </li>)
                )}
            </ListTag>
        </nav>
    );

}
export default App;


// function App({ drink1, drink2, drink3, drink4 }) {

//     return (
//         <nav>
//             <ul>
//                 <li><a href="1.html">{drink1}</a></li>
//                 <li><a href="2.html">{drink2}</a></li>
//                 <li><a href="3.html">{drink3}</a></li>
//                 <li><a href="4.html">{drink4}</a></li>
//             </ul>
//         </nav>
//     );

// }
// export default App;