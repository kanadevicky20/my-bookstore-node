const express=require('express');
const cors=require('cors');
const db=require('./Connection');
const routes=express.Router();
const Services=require('./Services');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

routes.get('/all',async(req,res)=>{
    try {
        const result = await Services.getData();
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

routes.get('/id/:id',async(req,res)=>{
    const id=req?.params.id;
    try {
        const result = await Services.getDataById(id);
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }   
})

routes.delete('/deleteid/:id',async(req,res)=>{
    const id=req?.params.id;
    try {
        const result = await Services.deleteDataById(id);
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }   
})


module.exports=routes;