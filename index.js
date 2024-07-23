const express = require('express')
const jwt = require('jsonwebtoken')
const jwtKey = "Asdert123"

const app = express();
app.use(express.json());

app.get('/', (req, resp) => {
    resp.send("Hello World")
})

app.post("/login", (req, resp) => {
    const user = {
        id: 1,
        name: "Talha",
        email: "talha@test.com",
        password: "12345"
    }

    jwt.sign({ user }, jwtKey, { expiresIn: '3000s' }, (err, token) => {
        if (err) {
            resp.status(400).json("Error on creating token")
        } else {
            resp.send({
                data: user,
                auth: token
            })
        }
    })
})


app.post('/addtocart', verifytoken, (req,resp)=>{
resp.send("called")
})


function verifytoken(req,resp,next){
let token = req.headers['authorization'];
if(token){
token = token.split(' ')[1];
 
 jwt.verify(token , jwtKey , (err, valid)=>{
   if(err){
    return resp.status(401).json({Error:"You must be loginned - Invalid key"})
   }
   else{
    next()
   }
 })
}else{
    return resp.status(401).json({Error:"Key not given- must loginned"})
}
}

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})