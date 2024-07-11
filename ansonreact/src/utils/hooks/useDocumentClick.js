import { useEffect } from "react";

export default function useDocumentClick() {

  useEffect(()=> {
    console.log("useDocumentClick");
    const handleDocumentClick = () => {
      console.log("Clicked Document!");
    }
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);  
    };
  })
}