const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public", "unknown-pleasures");

console.log("!!! Verifying build...");
console.log("!!! Contents of /public/unknown-pleasures:");

function listFiles(dir) {
	fs.readdirSync(dir).forEach((file) => {
		const fullPath = path.join(dir, file);
		const stats = fs.statSync(fullPath);
		console.log(`${file} - ${stats.size} bytes`);

		if (file.endsWith(".js")) {
			const content = fs.readFileSync(fullPath, "utf8").slice(0, 100);
			console.log(`First 100 chars of ${file}:`, content);
		}
	});
}

listFiles(publicDir);
