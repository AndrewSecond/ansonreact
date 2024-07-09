import { useState, useEffect } from "react";

export default function LoginForm() {

  useEffect(() => {
    const resizeEventHandler = () => {
        console.log("Window/ViewPort Resized!");
    }
    const handleDocumentClick = () => {
      console.log("Clicked Document");
    }

    window.addEventListener('resize', resizeEventHandler);
    document.addEventListener('click', handleDocumentClick);

    return () => {
      console.log("Unmounting LoginForm");
      console.log("Removing Resize Event Listener");
      window.removeEventListener('resize', resizeEventHandler);
      window.removeEventListener('click', handleDocumentClick);
    }
  }, []);

    return (
      <form method="POST" onSubmit={(e) => {
        e.preventDefault();
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
