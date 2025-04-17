import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { createClient } from "redis";

let app = express();
app.use(cors());
config();

// Ensure URL is read correctly
const url = process.env.MDURL;
if (!url) {
    console.error("Error: MDURL is not defined. Please check your .env file.");
    process.exit(1);
}

console.log("MongoDB URL:", url);
const client = createClient({
    username: process.env.REDISUSERNAME,
    password: process.env.PASSWORD,
    socket: {
        host: process.env.HOST,
        port: process.env.RPORT,
    },
});
await client.connect();

client.on("error", (err) => console.log("Redis Client Error", err));
console.log("Logged in");

app.get("/read", async (req, res, next) => {
    try {
        const books = await client.zRangeWithScores("books", 0, 20);
        const sortedBooks = await Promise.all(
            books.map((b) => {
                return client.hGetAll(`books:${b.score}`);
            })
        );
        console.log(books);
        const result = await client.get("foo");
        console.log(result); // >>> bar
        res.status(200).json({ data: result || "No value found" });
    } catch (error) {
        next(error); // will design custom next function
    }
});

app.listen(5000, () => {
    console.log("Server is running");
});
