import express from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
const app = express();

let filePath = path.join(__dirname, "NodeStream\videoplayback.webm");

console.log(filePath, "==");

app.get("/stream", (req, res) => {
    let stat = fs.statSync(filePath);
    let fileSize = stat.size;
    console.log(fileSize);
});

let port = 8000;
app.listen(port, () => {
    console.log(` app is running on the given port${port}`);
});


// there are majorly 4 types of stream available
// 1) Readable Stream 2) Writeable Stream 3) Duplex Stream 4) Transform Stream   it can transform data as it's written or being read
