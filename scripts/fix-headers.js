#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const headersPath = path.join(process.cwd(), "public", "_headers");

if (fs.existsSync(headersPath)) {
	console.log("🔍 Fixing X-Frame-Options in _headers file...");

	let headersContent = fs.readFileSync(headersPath, "utf8");
	const beforeCount = (headersContent.match(/x-frame-options:\s*DENY/gi) || []).length;

	if (beforeCount > 0) {
		// Replace ALL instances of DENY with SAMEORIGIN
		headersContent = headersContent.replace(/x-frame-options:\s*DENY/gi, "x-frame-options: SAMEORIGIN");
		fs.writeFileSync(headersPath, headersContent);
		console.log(`✅ Fixed ${beforeCount} X-Frame-Options: DENY → SAMEORIGIN`);
	} else {
		console.log("✅ No X-Frame-Options: DENY found (already correct)");
	}
} else {
	console.error("❌ _headers file not found at", headersPath);
	process.exit(1);
}
