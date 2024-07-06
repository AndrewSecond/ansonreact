import {useState} from 'react';

export default function RegisterForm() {
  const [authdata, setAuthdata] = useState({
    username: "",
    password: "",
    displayname: "",
  });

  const notValid = !authdata.username || !authdata.password || !authdata.displayname;

  return (
    <form method="POST" onSubmit={(e) => {
      
    }} >
      <div>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          name="username"
          value={authdata.username}
          onChange={(e) => { 
            setAuthdata({
              ...authdata, 
              username: e.target.value});
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
          value={authdata.password}
          onChange={(e) => {
            setAuthdata({
              ...authdata, 
              password: e.target.value});
          }} />
      </div>
      <div>
        <label htmlFor="diaplayname">Display Namme</label>
        <input 
          type="text" 
          id="displayname" 
          name="displayname"
          value={authdata.displayname}
          onChange={(e) => {
            setAuthdata({
              ...authdata, 
              displayname: e.target.value});
          }} />
      </div>
      <button>Login</button>
      <div><span>Username: {authdata.username}</span></div>  
      <div><span>Password: {authdata.password}</span></div>  
      <div><span>Display Name: {authdata.displayname}</span></div>
      <button disabled={notValid}>Sign Up</button> 
    </form>
    
  )
}
