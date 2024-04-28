import React from "react";
import Editor from "@monaco-editor/react";

type Props = {
  code: string;
  darkMode: string;
  codeLanguage: string;
};

export default function MonacoEditor({ code, darkMode, codeLanguage }: Props) {
  return (
    <Editor
      height="100%"
      width="100%"
      theme={darkMode}
      language={codeLanguage}
      value={code}
    />
  );
}
