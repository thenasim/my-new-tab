const fs = require("fs-extra");
const path = require("path");

const ROOT = path.resolve(__dirname, "../");
const SOURCE = path.resolve(ROOT, "chrome");
const DEST = path.resolve(ROOT, "dist");

fs.copy(SOURCE, DEST)
  .then(() => console.log("Success copying"))
  .catch(() => console.error("Error occured while copying"));
