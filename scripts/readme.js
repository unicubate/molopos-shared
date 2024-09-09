const fs = require("fs");

const data = fs.readFileSync("./src/enum/index.ts", "utf8").split("export enum ");

let index = "";
let body = "";

for (const item of data) {
    if (item) {
        const [key, values] = item.split(" {");

        const contents = values
            .replace(/\};?/, "")
            .split("\n")
            .filter((item) => item.trim() !== "");

        let itemDesc = "";
        let itemTable = "";

        for (let content of contents) {
            content = content.trim();
            if (content.startsWith("//")) {
                const descLine = content.replace("//", "").trim();
                itemDesc += descLine + "\n";
                continue;
            };
            let [key, raw] = content.split(" = ");
            key = key.trim();
            raw = raw.replace(",", "");
            let [value, desc] = raw.split("//");
            value = value.trim();
            desc = desc && desc.trim();
            itemTable += "<tr><td>"
                + toSpace(key) + (desc ? " (" + desc + ")" : "")
                + "</td><td>"
                + value
                + "</td></tr>\n";
        }

        index += "- [" + toSpace(key) + "](#" + toUrl(toSpace(key)) + ")";

        body += "## " + toSpace(key) + "\n\n";
        if (itemDesc) {
            body += itemDesc + "\n";
            index += ", " + itemDesc.trim();
        }
        body += "<table>\n";
        body += itemTable + "\n";
        body += "</table>\n\n";
        index += "\n";
    }
}

let README_MD = "";

README_MD += "<small><sup>This file is generated from the source code. Do not edit directly, use `npm run docs`</sup></small>\n\n";
README_MD += "# Statuses and type\n\n";

README_MD += index;
README_MD += body;

fs.writeFileSync("./src/enum/README.md", README_MD);

function toSpace(str) {
    return str.replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5');
}

function toUrl(str) {
    return str.toLowerCase().replace(/ /g, "-");
}
