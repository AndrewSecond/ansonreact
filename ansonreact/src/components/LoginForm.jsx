import { useEffect } from "react";
import useDocumentClick from "../utils/hooks/useDocumentClick";

export function LoginForm() {
  useEffect(() => {
    const resizeEventHandler = (e) => {
      console.log("Window/ViewPort Resized!");
    }
    window.addEventListener("resize", resizeEventHandler);

    return () => {
      console.log("Unmounting LoginForm");
      console.log("Removing Resize Event listener");
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []);

  useDocumentClick();

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');

      }}>
    </form>
  )
}