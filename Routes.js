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

routes.put('/deleteid/:id',async(req,res)=>{
    console.log("param:",req.params.id);
    
    const id=req?.params.id;
    try {
        const result = await Services.deleteDataById(id);
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }   
})

routes.put('/edit',async(req,res)=>{
    console.log("req.body:",req?.body.data);
    
    const data=req?.body.data;
    try {
        const result = await Services.editData(data);
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }   
})

routes.post('/save',async(req,res)=>{
    const data=req?.body;
    try {
        const result = await Services.saveData(data);
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }   
})

routes.post('/signup',async(req,res)=>{
    console.log("req.body:",req?.body.data);
    
    const data=req?.body.data;
    try {
        const result = await Services.signUp(data);
        res.json(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }   
})



module.exports=routes;