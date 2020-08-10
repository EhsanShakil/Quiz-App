import React, { useEffect } from "react";
import "./App.css";
import { FetchApi } from "./Api/Api";

function App() {
  useEffect(() => {
    const data = async () => {
      const questions = await FetchApi(10, "easy");
      console.log(questions);
    };
    data();
  }, []);
  return (
    <div className="App">
      <h1>Hello World!!!</h1>
    </div>
  );
}

export default App;
