import {useState} from 'react';

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");

  const notValid = !username || !password || !displayname;

  return (
    <form method="POST" onSubmit={(e) => {
      
    }} >
      <div>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          name="username"
          value={username}
          onChange={(e) => { 
            setUsername(e.target.value);
          }} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input 
          type="text" 
          id="password" 
          name="password"
          type="password" 
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }} />
      </div>
      <div>
        <label htmlFor="diaplayname">Display Namme</label>
        <input 
          type="text" 
          id="displayname" 
          name="displayname"
          value={displayname}
          onChange={(e) => {
            setDisplayname(e.target.value);
          }} />
      </div>
      <button>Login</button>
      <div><span>Username: {username}</span></div>  
      <div><span>Password: {password}</span></div>  
      <div><span>Display Name: {displayname}</span></div>
      <button disabled={notValid}>Sign Up</button> 
    </form>
    
  )
}
