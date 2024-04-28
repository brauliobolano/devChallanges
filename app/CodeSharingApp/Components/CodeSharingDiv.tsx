"use client";
import React from "react";
import "./CodeSharingDiv.css";
import CodeEditor from "./CodeEditor/CodeEditor";
import ButtonLeftDiv from "./Buttons/ButtonLeftDiv";
import ButtonRight from "./Buttons/ButtonRight";

const CodeSharingDiv = () => {
  const [darkMode, setDarkMode] = React.useState("vs-light");
  const [codeLanguage, setCodeLanguage] = React.useState("html");
  const [codeLanguageButton, setCodeLanguageButton] = React.useState("HTML");

  return (
    <div
      className="codeDIV"
      style={{
        backgroundColor: darkMode === "vs-dark" ? "#1E1E1E" : "#fffffe",
      }}
    >
      <div className="codeEditorCSS">
        <CodeEditor darkMode={darkMode} codeLanguage={codeLanguage} />
      </div>

      <div className="codeDButtons">
        <ButtonLeftDiv
          codeLanguage={codeLanguage}
          setCodeLanguage={setCodeLanguage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          codeLanguageButton={codeLanguageButton}
          setCodeLanguageButton={setCodeLanguageButton}
        />
        <ButtonRight darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default CodeSharingDiv;
