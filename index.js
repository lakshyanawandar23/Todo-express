const express=require('express');
const app=express();
const body_parser=require('body-parser');
const routes=require('./routes/index')

app.use(body_parser.json());
app.use(body_parser.text());
app.get('/',(req,res)=>{
    res.send('hello');
})


app.use('/api',routes);

app.listen(3000,()=>{
    console.log("server is up");
})