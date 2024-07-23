const express = require('express')
const path = require("path")
const dirPath = path.join(__dirname , "public")

const app = express()

app.get('/' , (req,resp)=>{
resp.sendFile(dirPath + "/index.html")
})

app.listen(3000,()=>{
console.log("Server is listening on port 3000")
})