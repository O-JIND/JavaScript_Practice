function App() {

    const MemberList = [
        {
            id: "hong123",
            name: "홍길동",
            email: "hong123@example.com",
            joinDate: "2024-06-15",
            age: 10
        },
        {
            id: "kimc456",
            name: "김철수",
            email: "kimc456@example.com",
            joinDate: "2024-07-20",
            age: 15
        },
        {
            id: "park789",
            name: "박영희",
            email: "park789@example.com",
            joinDate: "2024-08-05",
            age: 20
        },
        {
            id: "lee101",
            name: "이민수",
            email: "lee101@example.com",
            joinDate: "2024-09-12",
            age: 25
        }
    ];

    const Identify = (age) => {
        if (age > 19) {
            return '성인';
        } else {
            return '미성년자';
        }
    };
    const totr = MemberList.map((item, id) =>
        <tr key={id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.joinDate}</td>
            <td>{item.age}</td>
            <td>{Identify(item.age)}</td>
        </tr>
    );

    const wholetable =
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>JoinDate</th>
                    <th>Age</th>
                    <th>Identify</th>
                </tr>
            </thead>
            <tbody>
                {totr}
            </tbody>
        </table>

    return (wholetable);

}
export default App;