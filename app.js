
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const port = 3000


// here will implement middleware 

app.get("/", (req, res) => {
      res.send( "the server is running perfectly over there")
});

app.post("/products", async (req, res) => {
    try {
        const token = req.headers;
        const { productId } = req.body;

        // here will implemnt Service and logic
        let productData = await prodcutrService();

        let response = {
            success: 1,
            data: productData,
        };
        res.send(response);
    } catch (error) {
        console.error(error);
        let response = {
            success: 0,
            message: error.message,
        };
        res.send(response);
    }
});

app.listen(port,()=>{
    console.log(`the server is runing on the prot ${port}`)
})