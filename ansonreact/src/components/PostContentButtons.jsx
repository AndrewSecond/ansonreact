import { useContext } from 'react';
import { UserContext } from '../utils/contexts/UserContext';


export function PostContentButtons(){
  const {id, setUserData} = useContext(UserContext);
  return (
    <div>
      <div><span>PostContentButtons</span></div>
      <button
         onClick={() => {setUserData((state) => ({...state, name: "updated display name", id: id+1}))}} >
        {id}
      </button>
    </div>
  )
}