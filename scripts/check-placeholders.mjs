// Fails the build when a rendered page still shows an editorial placeholder,
// such as "[À CONFIRMER]", "[TO CONFIRM]", "[TODO: ...]", TODO, TBD or FIXME.
// Only visible text is checked: scripts, styles and HTML comments are ignored.
import {readdirSync, readFileSync} from "node:fs";
import {join, relative} from "node:path";

const root = process.argv[2] ?? "dist";

const PATTERNS = [
	// A bracketed note starting with a capitalised word: [À CONFIRMER], [TO CONFIRM: ...].
	/\[[A-ZÀ-ÖØ-Þ][A-ZÀ-ÖØ-Þ ]{2,}[^\]\n]{0,120}\]/g,
	/\b(?:TODO|TBD|FIXME|XXX)\b/g,
	/lorem ipsum/gi,
];

function htmlFiles(dir) {
	return readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) return htmlFiles(path);
		return entry.name.endsWith(".html") ? [path] : [];
	});
}

function visibleText(html) {
	return html
		.replace(/<!--[\s\S]*?-->/g, " ")
		.replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, " ")
		.replace(/<[^>]+>/g, " ")
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/\s+/g, " ");
}

const findings = [];
for (const file of htmlFiles(root)) {
	const text = visibleText(readFileSync(file, "utf8"));
	for (const pattern of PATTERNS) {
		for (const match of text.matchAll(pattern)) {
			const start = Math.max(0, match.index - 40);
			findings.push(`${relative(root, file)}: "${match[0]}" … ${text.slice(start, match.index + match[0].length + 40).trim()}`);
		}
	}
}

if (findings.length > 0) {
	console.error(`Placeholder text found in ${root}:`);
	for (const finding of findings) console.error(`  ${finding}`);
	process.exit(1);
}
console.log(`No placeholder text in ${root}.`);
