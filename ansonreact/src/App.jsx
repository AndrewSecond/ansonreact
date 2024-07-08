import { useState, useEffect } from "react";
import LoginForm from "./components/Loginform";

export default function App() {
    const [posts, setPosts] = useState({
        title: "",
        body: "",
    });

    const [toggle, setToggle] = useState(false);


    return (
        <>
            <div>
                <button onClick={() => setToggle((state) => !state)} >Toggle</button>
                {toggle && <LoginForm />}
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
