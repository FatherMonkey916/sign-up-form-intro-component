import React from "react";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="App-copy-container">
          <h1 className="App-copy-heading">Learn to code by watching others</h1>
          <p className="App-copy-main">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers this
            is invaluable.
          </p>
        </div>
        <div className="App-blue-rectangle">
          <p className="App-blue-rect-text">
            <span>Try it free 7 days</span> then $20/mo. thereafter.
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
