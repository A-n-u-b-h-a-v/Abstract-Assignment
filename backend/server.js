
const express = require("express")
const app =express()
const cardSchema=require("./model/Card")

app.use(express.json())


app.get("/",(req,res)=>{
    const user=cardSchema.create({
      title:"humne kia",
      description:"tumne kia"
    })
    res.send("hum krenge")
})
app.listen(3010)