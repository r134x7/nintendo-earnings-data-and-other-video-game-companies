import { readFileSync, writeFile } from "fs";

let getFileName = process.argv[2];

const getFile = readFileSync(getFileName, "utf-8");

let newJSONStringify = JSON.stringify(getFile, undefined, 4);

let toParse = JSON.parse(newJSONStringify);

writeFile(getFileName, toParse, (err) =>
  err ? console.error(err) : console.log('json? JSSSOOONNNNNN!')
);