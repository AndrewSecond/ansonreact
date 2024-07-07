import { useState } from "react";
import UserDetails from "./components/UserDetails";

export default function App() {
    const [users, setUsers] = useState(mockUsers);
    return (
        <>
            <button>Create</button>
            <br />
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
