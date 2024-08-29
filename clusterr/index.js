const express = require('express')

const app = express();

app.get("/",(req,res)=>{
    let total = 0
    for(let i = 0; i<50000000;i++){
        total++;
    }
    res.send(total)
})

app.listen(3000,()=>console.log('listening on 3000'))