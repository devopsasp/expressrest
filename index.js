import express from 'express'

 var itemarray=[{
    itemid:1,
    itemname:"Coffee",
    price:20
},
{
    itemid:2,
    itemname:"Ice Tea",
    price:24
}]




const app=express()
app.use(express.json())
app.get("/items",(req,res)=>{
    res.send(itemarray)
})

app.post("/additem",(req,res)=>{
    console.log(req.body)
    itemarray=[...itemarray,req.body]
    res.send(req.body)
})

app.patch("/updateitem",(req,res)=>{

    var newarray=itemarray.filter((e)=>e.itemid!=req.body.itemid)
    itemarray=[...newarray,req.body]
    console.log(itemarray)
   res.send(req.body)

})
app.delete("/deleteitem",(req,res)=>{
    var newarray=itemarray.filter((e)=>e.itemid!=req.body.itemid)
    itemarray=[...newarray]
    console.log(itemarray)
    res.send(req.body)
})
const server=app.listen(5050,()=>{
      console.log("server listening")
})