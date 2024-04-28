"use client";
import React from "react";
import dynamic from "next/dynamic";
type Props = {
  darkMode: string;
  codeLanguage: string;
};
// Dynamically import the Monaco Editor component
const MonacoEditor = dynamic(() => import("./MonacoEditor"), { ssr: false });

export default function CodeEditor({ darkMode, codeLanguage }: Props) {
  const defaultCode = `
    <html>
      <head>
        <title>HTML Sample</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <style type="text/css">
          h1 {
            color: #CCA3A3;
          }
        </style>
      </head>
      <body>
        <h1>Heading No.1</h1>
        <input disabled type="button" value="Click me" />
      </body>
    </html>
  `;
  const code = defaultCode;

  return (
    <MonacoEditor codeLanguage={codeLanguage} darkMode={darkMode} code={code} />
  );
}
