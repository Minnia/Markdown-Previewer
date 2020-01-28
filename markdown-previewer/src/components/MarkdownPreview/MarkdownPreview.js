import React, { useState } from "react";
let ReactMarkdown = require("react-markdown");
import { DivOuterContainer, Test } from "./styled";
// * And last but not least, let's not forget embedded images:
//  ![React Logo w/ Text](https://goo.gl/Umyytc )
const MarkdownPreview = () => {
  const [
    markdownPreview,
    setMarkdownPreview
  ] = useState(`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
    
  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
    
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.com), and
   > Block Quotes!

  And if you want to get really crazy, even tables:

  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | ------------- 
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.

  - And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
          - That look like this.

And hey, here's a code block:
\`\`\`
Code block
\`\`\`

  1. And there are numbererd lists too.
  1. Use just 1s if you want! 
  1. But the list goes on...
  - Even if you use dashes or asterisks.
  `);
  const inputChange = event => {
    setMarkdownPreview(event.target.value);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to the Markdown Previewer</h1>
      <Test>
        <p>Editor</p>
        <p>Previewer</p>
      </Test>
      <DivOuterContainer>
        <div>
          <textarea
            id="editor"
            onChange={inputChange}
            value={markdownPreview}
            style={{
              width: 600,
              height: 600,
              border: "none"
            }}
          ></textarea>
        </div>

        <div
          id="preview"
          style={{
            width: 600,
            height: 600,
            backgroundColor: "white",
            fontSize: 10
          }}
        >
          <ReactMarkdown source={markdownPreview} escapeHtml={false} />
        </div>
      </DivOuterContainer>
    </div>
  );
};

export default MarkdownPreview;
