import { useState, useEffect } from "react";
import PostContainer from './components/PostContainer';
import {UserContext} from './utils/contexts/UserContext';
import useFetchUser from "./utils/hooks/useFetchUser";
// import { PostContentButtons } from "./components/PostContentButtons";

export default function App() {
    const nextId = 3;
    const {user, loading, error} = useFetchUser(nextId);

    const [userData, setUserData] = useState();




    console.log(user.company);

    useEffect(() => {
        if (!loading && !error && user) {
            setUserData(user);
        }
        console.log()
    }, [user, loading, error]);


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