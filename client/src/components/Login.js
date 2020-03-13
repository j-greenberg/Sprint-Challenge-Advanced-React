import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Login() {
  const [user, setUser] = useLocalStorage("user", false);

  function handleChanges() {
    console.log(user);
    if (user) {
      setUser(false);
    } else {
      setUser(true);
    }
  }

  return (
    <div>
      <button onClick={handleChanges}>Change LocalStorage</button>
    </div>
  );
}
