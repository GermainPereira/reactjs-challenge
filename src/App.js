import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get("/repositories").then((res) => {
      setRepositories(res.data);
      console.log(res.data);
    });
  }, []);

  async function handleAddRepository() {
    const postContent = { title: `${Date.now()}`, url: "www", techs: "Lead" };
    const res = await api.post("/repositories", postContent);
    console.log(res.data);
    setRepositories([...repositories, res.data]);
  }

  async function handleRemoveRepository(id) {
    console.log(id);
    console.log(repositories);
    api.delete(`/repositories/${id}`);
    const germainjohannaarray = [];
    repositories.forEach((repository) =>
      repository.id !== id ? germainjohannaarray.push(repository) : null
    );
    console.log(germainjohannaarray);
    setRepositories(germainjohannaarray);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repository) => (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
