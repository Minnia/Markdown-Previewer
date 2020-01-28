import React from "react";
import MarkdownPreview from "./components/MarkdownPreview";
import Welcome from "./components/Welcome/Welcome";
const App = () => {
  return (
    <div>
      <div className="App">
        <MarkdownPreview />
      </div>
      <div>
        <Welcome name="Jasmine" />
      </div>
    </div>
  );
};

export default App;
