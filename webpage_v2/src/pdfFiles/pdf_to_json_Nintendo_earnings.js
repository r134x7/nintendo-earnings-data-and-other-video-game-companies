import fs from "fs";
import PDFParser from "pdf2json/pdfparser.js";
console.log("check1");
const pdfParser = new PDFParser(this,1);

// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
// pdfParser.on("pdfParser_dataReady", pdfData => {
    // fs.writeFile("testingONE.json", JSON.stringify(pdfData));
// });

console.log("check2");
// pdfParser.loadPDF("221108e.pdf");
pdfParser.loadPDF("(E88BB1)2022E5B9B43E69C88E69C9F_E6B1BAE7AE97E79FAD.pdf");
// pdfParser.loadPDF("2_en_2021E5B9B4E5BAA64Q_E8A39CE8B6B3E8B387E69699(E_2.pdf");

console.log("check3");
// let x = pdfParser.on("dataReady", (data) => {

//     const rawText = pdfParser.getRawTextContent();

//     console.log("check4");

//     return rawText
// })
// pdfParser.
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("testFile3.txt", pdfParser.getRawTextContent(), ()=>{console.log("what?");});
})
console.log("check5");
// console.log(x);