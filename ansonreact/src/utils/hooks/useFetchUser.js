import { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/users";

export default function useFetchUser(userId) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(`${url}/${userId}`, {signal: controller.signal})
    .then((response) => response.json())
    .then(data => {
      setUserData(data);
      setError(undefined);
    })
    .catch((error) => setError(error))
    .finally(() => setLoading(false));

    return () => {
      controller.abort();
      setLoading(false);
    }
  }, [userId]);

  return {user: userData, loading, error};
}