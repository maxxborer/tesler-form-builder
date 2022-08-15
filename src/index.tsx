export { default } from "./TeslerFormBuilder";

// testing
// import React, { useState, useCallback } from "react";
// import ReactDOM from "react-dom";
// import TeslerFormBuilder from "./TeslerFormBuilder";
// import ListOfForms from "./ListOfForms";
// import { IFormilySchema } from "@designable/formily-transformer";

// const TestApp = () => {
//   const [builderView, setBuilderView] = useState(true);
//   const toggleView = useCallback(() => setBuilderView(!builderView), [builderView]);

//   const [json, setJson] = useState<IFormilySchema>();
//   const changeJson = useCallback(json => setJson(json), []);

//   const onClickSubmit = useCallback(e => console.log("submit: click", { e }), []);
//   const onSubmit = useCallback(values => console.log("submit: submit", { values }), []);
//   const onSubmitSuccess = useCallback(payload => console.log("submit: success", { payload }), []);
//   const onSubmitFailed = useCallback(feedbacks => console.log("submit: failed", { feedbacks }), []);

//   return (
//     <>
//       <button onClick={toggleView}>Toggle view</button>
//       <ListOfForms
//         json={json}
//         onClickSubmit={onClickSubmit}
//         onSubmit={onSubmit}
//         onSubmitSuccess={onSubmitSuccess}
//         onSubmitFailed={onSubmitFailed}
//         style={{ display: !builderView ? "block" : "none" }}
//       />
//       <TeslerFormBuilder onSave={changeJson} onPublish={changeJson} style={{ display: !!builderView ? "block" : "none" }} />
//     </>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<TestApp />, rootElement);
