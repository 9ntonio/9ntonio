const fs = require("fs-extra");
const path = require("path");

const sourceDir = path.join(__dirname, "../static/unknown-pleasures");
const targetDir = path.join(__dirname, "../public/unknown-pleasures");

// Ensure the target directory exists
fs.ensureDirSync(targetDir);

// Copy the directory
fs.copySync(sourceDir, targetDir);
console.log("!!! Unknown Pleasures directory copied successfully");
