import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
        setError("Failed to fetch jokes");
      });
  }, []);

  return (
    <div>
      <h1>Chai and Full Stack</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Jokes: {jokes.length}</p>
      {jokes.length === 0 ? (
        <p>No jokes available</p>
      ) : (
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
