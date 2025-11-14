import { useEffect, useState } from "react";
import { Route } from "wouter";
import Home from "./pages/Index";
import Profile from "./pages/Profile";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/ping")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/profile" component={Profile} />
    </>

  );
}

export default App;
