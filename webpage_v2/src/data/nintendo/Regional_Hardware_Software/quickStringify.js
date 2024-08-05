import { readFileSync, writeFile } from "fs";

let getFileName = process.argv[2];

const getFile = readFileSync(getFileName, "utf-8");

let toParse = JSON.parse(getFile);

let newJSONStringify = JSON.stringify(toParse, undefined, 4);

writeFile(getFileName, newJSONStringify, (err) =>
  err ? console.error(err) : console.log('json? JSSSOOONNNNNN!')
);