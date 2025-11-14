import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/ping")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React + FastAPI</h1>
      <p>API says: {message}</p>
    </div>
  );
}

export default App;
