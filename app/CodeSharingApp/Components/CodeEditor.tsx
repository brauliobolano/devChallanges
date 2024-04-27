"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the Monaco Editor component
const MonacoEditor = dynamic(() => import("./MonacoEditor"), { ssr: false });

export default function CodeEditor() {
  const code = 'function x() {\nconsole.log("Hello world!");\n}';

  return <MonacoEditor code={code} />;
}
