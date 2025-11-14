import { useEffect, useState } from "react";
import { Route } from "wouter";
import Home from "./pages/Index";
import Profile from "./pages/Profile";
import { Attributes } from "./pages/Attributes";
import { House } from "./pages/House";
import Bank from "./pages/Bank";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/ping")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <Route path="/" component={Attributes} />
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/attributes" component={Attributes} />
      <Route path="/house" component={House} />
      <Route path="/bank" component={Bank} />
    </>
  );
}

export default App;
