import express from "express"
import cors from "cors"
import {config} from "dotenv"

let app = express();
app.use(cors);
config()

// Ensure URL is read correctly
const url = process.env.MDURL;
if (!url) {
    console.error("Error: MDURL is not defined. Please check your .env file.");
    process.exit(1);
}

console.log("MongoDB URL:", url);


app.get("/read", (req, res, next) => {
    try {
        let id = req.params;

        if (!id) {
            throw new Error("Invalid Payload");
        }
        let data = [];
        // will fetch data from the database service
        let response = {
            success: 1,
            result: data,
        };
        res.status(200).json(response);
    } catch (error) {
        next(error); // will design custom next function
    }
});

app.listen(5000,()=>{
   console.log("Server is running")
});
