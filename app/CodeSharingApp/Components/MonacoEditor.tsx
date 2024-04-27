import React from "react";
import Editor from "@monaco-editor/react";

export default function MonacoEditor({ code }: { code: string }) {
  return (
    <Editor
      height="100%"
      width="100%"
      theme="vs-dark"
      language="javascript"
      value={code}
    />
  );
}
