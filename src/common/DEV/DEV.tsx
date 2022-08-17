import React, { useEffect, useState } from "react";
import "./DEV.css";

function DEV({ title = "JSON: ", json }: { title?: string; json?: any }) {
  const [jsonObj, setJsonObj] = useState<any>();
  useEffect(() => {
    setJsonObj(JSON.stringify(json, null, 2));
  }, [json]);

  return (
    <div id="DEVJSON">
      <p>{title}</p>
      <pre>{jsonObj}</pre>
    </div>
  );
}

export default DEV;
