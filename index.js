const express = require('express')
const apicall =  require("./Gemini-Api")
const cors = require("cors");
const app = express()
const PORT = 8005
app.use(cors());
app.use(express.json())
app.get("/",(req,res)=>{
   res.json({msg:"SERVOR IS RUNNING FINE"})
})
app.post("/google-gemini-api",async (req,res)=>{
     const {msg} = req.body;
     console.log(msg);
     
     try {
        let apiRes = await apicall(msg)
        res.status(200).json({res:apiRes})
     } catch (error) {
        res.status(500).send("Servor error")
     }
     
})

app.listen(PORT,()=>{
    console.log("SERVOR IS UP AT PORT NUMBER 8005");
})
