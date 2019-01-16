import React from "react";
import ReactDOM from "react-dom";
import TagsInputExample from "./TagsInput/TagsInput";
import TagsInputEmailExample from "./TagsInput/TagsInputEmail";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TagsInputExample />
      <TagsInputEmailExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
