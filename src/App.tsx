import React from "react";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Learn to code by watching others</h1>

      <p>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers this is
        invaluable.
      </p>

      <div className="App-blue-box">
        <p>Try it free 7 days then $20/mo. thereafter.</p>
      </div>

      <Form />
    </div>
  );
}

export default App;
