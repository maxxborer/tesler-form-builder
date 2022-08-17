import React from "react";
import "./DEV.css";

function DEV({ title = "JSON: ", json }: { title?: string; json?: any }) {
  return (
    <div id="DEVJSON">
      <p>{title}</p>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
}

export default DEV;
