import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function rm(dir) {
    fs.rmSync(dir, { recursive: true, force: true });
}
function mkdir(dir) {
    fs.mkdirSync(dir, { recursive: true });
}
function copyDir(src, dest) {
    mkdir(dest);
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const s = path.join(src, entry.name);
        const d = path.join(dest, entry.name);
        if (entry.isDirectory()) copyDir(s, d);
        else fs.copyFileSync(s, d);
    }
}

const portalToolsDir = path.join(root, "apps/portal/public/tools");
rm(portalToolsDir);
mkdir(portalToolsDir);

const mappings = [
    { name: "ladle", src: "apps/ladle-react/build" },
    { name: "histoire", src: "apps/histoire-vue/.histoire/dist" },
    { name: "docs", src: "apps/docs-docusaurus/build" },
    { name: "styleguidist", src: "apps/styleguidist-react/styleguide" },
    { name: "playroom", src: "apps/playroom-react/dist" }
];

for (const m of mappings) {
    const srcAbs = path.join(root, m.src);
    const destAbs = path.join(portalToolsDir, m.name);

    if (!fs.existsSync(srcAbs)) {
        console.warn(`[skip] ${m.name}: output não encontrado em ${m.src}`);
        continue;
    }

    console.log(`[copy] ${m.name}: ${m.src} -> apps/portal/public/tools/${m.name}`);
    copyDir(srcAbs, destAbs);
}

console.log("Tools copiadas para o portal");