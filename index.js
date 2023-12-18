const express = require('express')
const mongoose = require('mongoose');
const app = express()
const patient = required('./Models/UGMC')
//routes
app.use(express.json())
app.get('/blog',(req,res)=>{
    res.send('hello node API but blog my name is val kraidy')
}
)
app.post('./patient',(req,res)=>{
    console.log(req.body)
    res.send (req.body)
}
)

mongoose.set("strictQuery",false)
mongoose.
connect('mongodb+srv://valkraidy:Kwameval7@cluster0.dmozzfn.mongodb.net/mini-iaretryWrites=true&w=majority')
.then(()=>{
    console.log('connected to MongoDB')
    app.listen(3000,()=>{
        console.log("Node API app is running on port 3000" )
    }
    )
   
}

).catch((error)=>{
    console.log(error)
}
)