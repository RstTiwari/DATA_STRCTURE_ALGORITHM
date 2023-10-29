
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const port = 3003


// here will implement middleware 

app.post("/home", (req, res) => {
      res.send( "the server is running perfectly over there")
      res.setHeader('X-Foo', 'bar');

});

app.post("/products", async (req, res) => {
    try {
        const token = req.headers;
       
        let response = {
            success: 1,
            data: [],
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
app.post("/list", async (req, res) => {
    try {
        let headers = req.headers
        console.log(headers)
       
        let response = {
            success: 1,
            data: [],
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