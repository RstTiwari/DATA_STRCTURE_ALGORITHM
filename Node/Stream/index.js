import express from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
const app = express();

let filePath = path.join(__dirname,"Node\Stream\videoplayback.webm")

console.log(filePath,"==")


app.get("/stream", (req, res) => {
 let stat =  fs.statSync(filePath)
 let fileSize = stat.size
 console.log(fileSize)
 
});

let port = 8000;
app.listen(port, () => {
    console.log(` app is running on the given port${port}`);
});
