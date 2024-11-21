const express=require('express');
const cors=require('cors');
const db=require('./Connection');
const allRoutes=require('./Routes');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
app.use('/api',allRoutes);


app.listen(9000,()=>{
console.log("Server Started...");

})