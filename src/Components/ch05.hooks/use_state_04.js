import { useState } from "react";

function App() {
    const [members, setMembers] =
        useState([
            { id: 1, name: '김길선', age: 22 },
            { id: 2, name: '임우경', age: 45 },
            { id: 3, name: '황인태', age: 60 },
            { id: 4, name: '윤철용', age: 15 },
        ]);

    const [add, setAdd] = useState({ name: '', age: '' });

    const Namechange = (evt) => {
        const value = evt.target.value;
        setAdd(prev => ({ ...prev, name: value }))
    }

    const Agechange = (evt) => {
        const value = evt.target.value;
        setAdd(prev => ({ ...prev, age: value }))
    }


    const addMember = () => {
        const max = Math.max(...members.map((bean) => bean.id)) + 1;
        const newmem = { id: max, name: add.name, age: add.age };


        return (
            setMembers((prev) => [...prev, newmem]),
            members.concat(),
            setAdd({ name: "", age: "" })


        );

    }/* end AddMember */

    const RemoveSelectedRow = (evt) => {
        const id = evt.target.id
        //filter 이거 제외 모두
        const filteredData = members.filter((item) => item.id !== Number(id));
        setMembers(filteredData);

    }

    const memberlist = members.map((item) => (
        <li key={item.id} id={item.id} onDoubleClick={RemoveSelectedRow}>{`이름 : ${item.name}  나이 : ${item.age}`}</li>
    )
    );






    return (
        <div className="App">
            <h1>회원 목록</h1>
            <br /><br />
            Name  : <input type="text" onChange={Namechange} />
            <br /><br />
            Age &nbsp;&nbsp; : <input type="number" onChange={Agechange} />
            <br /><br />
            <button onClick={addMember}>Add</button>

            <br /><br />
            <ul >{memberlist}</ul>
        </div>
    );

}
export default App;