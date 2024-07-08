import { useState } from "react";
import UserDetails from "./components/UserDetails";

export default function App() {
    const [users, setUsers] = useState(mockUsers);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [counter, setCounter] = useState(3);

    function changeUser(e) {
        setUsername(e.target.value)
    }

    function changeEmail(e) {
        setEmail(e.target.value)
    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                const newUser = {
                    id: counter,
                    username: username,
                    email: email,
                };
                setCounter((count) => count+1);
                if (username&&email) {
                    setUsers((state) => [...state, newUser])
                }
            }} >
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" 
                    value="username" onChange={changeUser} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" 
                    value="email" onChange={changeEmail} />
                </div>
                <button>Add user</button>
            </form>
            {users.map((user) => (
            <UserDetails key={user.id} user={user} setUsers={setUsers}/>
            ))}
            {users[0] && <div>{users[0].email}</div>}
        </>

    )
}

const mockUsers = [
    {
        id:1,
        username:"nino",
        password:"nino12334",
        email:"nino@gmail.com",
    },
    {
        id:2,
        username:"antonio",
        password:"sdfsdf12334",
        email:"lsdddddko@gmail.com",
    },
    {
        id:3,
        username:"djus",
        password:"nidsf94394",
        email:"dsfgfsg@gmail.com",
    },
]
