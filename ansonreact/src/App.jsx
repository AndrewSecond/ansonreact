import { useState, useEffect } from "react";
import PostContainer from './components/PostContainer';
import {UserContext} from './utils/contexts/UserContext';
// import { PostContentButtons } from "./components/PostContentButtons";

export default function App() {
    const [userData, setUserData] = useState({
        id: 12,
        username: 'anson',
        email: 'anson@gmail.com',
        displayName: 'ninja',  
    });
    return (
        <>
        <UserContext.Provider value={{...userData, setUserData}}>
            <div>
                <PostContainer />
            </div>        
        </UserContext.Provider>
        </>
    );
}