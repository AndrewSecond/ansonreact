import { useState, useEffect } from "react";

export default function App() {
    const [counter, setCounter] = useState(0);
    const [sync, setSync] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => setUsers(json))
            .catch((error) => console.log(error))
    }, []);

    function clicked() {
        setCounter((count) => count+1)
    }

    function synced(e) {
        setSync((bool) => !bool);
        setTimeout(() => setSync((bool) => !bool), 10);
    }

    return (
        <>
           <div>
            <div>You clicked the button {counter} times</div>
            <button onClick={clicked}>Click me</button>
            <button onClick={cynced}>Sync</button>
           </div> 

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
