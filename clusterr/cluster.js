const cluster = require("node:cluster")
const os = require('os')
const express = require('express')

const totalCpus = os.availableParallelism()
console.log(totalCpus);

if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`)
    for( let i = 0; i<totalCpus; i++){
        cluster.fork();
    }
}
else{
    const app = express()
    app.get("/",(req,res)=>{
        let total = 0
        for(let i = 0; i<50000000;i++){
            total++;
        }
        res.send(total)
    })
    app.listen(3000,()=>{console.log(`listening on 3000  ${process.pid}`)})

}

// loadtest -c 10 --rps 100 -n 100 http://localhost:3000
