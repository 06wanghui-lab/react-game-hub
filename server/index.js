import express from "express"

const app=express()
const port=3000

app.get("/api/test",(request,response)=>{
    response.json({message:"Hello usagi"})
})

app.listen(port,()=>{
    console.log(`Backend running at http://localhost:${port}`)
})

