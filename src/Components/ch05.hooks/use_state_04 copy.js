import { useState } from "react";

function App() {
    const [members, setMembers] =
        useState([
            { id: 1, name: '김길선', age: 22 },
            { id: 2, name: '임우경', age: 45 },
            { id: 3, name: '황인태', age: 60 },
            { id: 4, name: '윤철용', age: 15 },
        ]);



    const Namechange = (evt) => {
        const { value } = evt.target;
        console.log({ value });

        setMembers(prev => ({ ...prev, name: value }))
    }

    const Agechange = (evt) => {
        const { value } = evt.target;
        console.log({ value });
        setMembers(prev => ({ ...prev, age: value }))
    }


    const setMember = () => {
        const max = Math.max(...members.map((bean) => bean.id)) + 1;
        setMembers(prev => ({ ...prev, id: (max) }))


        return (
            members.concat()
            , setMembers("", "", "")
        );

    }




    const RemoveSelectedRow = (evt) => {
        let click = evt.target.onDoubleClick;
        let value = evt.target.value;

        if (click) {

        }
    }

    const memberlist = members.map((item) => (
        <li key={item.id}>{`이름 : ${item.name}  나이 : ${item.age}`}</li>
    )
    );


    return (
        <div className="App">
            <h1>회원 목록</h1>
            <br /><br />
            Name  : <input type="text" onChage={Namechange} />
            <br /><br />
            Age &nbsp;&nbsp; : <input type="number" onChage={Agechange} />
            <br /><br />
            <button onClick={setMember}>Add</button>
            <br /><br />
            <ul >{memberlist}</ul>
        </div>
    );

}
export default App;