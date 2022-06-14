const express = require("express");

const { defaultPort } = require("./configs/webpack/utils/env.js");

const app = express();
// const port = 3000;
const sourceDir = "dist";

app.use(express.static(sourceDir));

app.listen(defaultPort, () => {
  console.log(`Express web server started: http://localhost:${defaultPort}`);
  console.log(`Serving content from /${sourceDir}/`);
});
