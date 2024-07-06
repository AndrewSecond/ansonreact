import React from "react";

export default function LoginForm() {
    return (
      <form method="POST" onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData();
        const username = formData.get('username');
        const password = formData.get('password');
        fetch("http://localhost:3001/api/login", {
          body: {
            username,
            password,
          },
          method: "POST",
        });
      }} >
        <label htmlFor="username">Username</label>
        <br />
        <input 
          type="text" 
          id="username" 
          name="username"
          onChange={(e) => {
            e.target.value
          }} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input 
          id="password" 
          name="password"
          type="password" 
          onChange={(e) => {
            e.target.value
          }} />
        <br />
        <button>Login</button>  
      </form>
    
    )
}
