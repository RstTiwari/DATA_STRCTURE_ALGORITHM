const express = require("express");
const cors = require("cors");

let app = express();
app.use(cors);

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
