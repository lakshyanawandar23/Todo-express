const express=require('express');
const routes=express.Router();
const v1router=require('./v1/index');

routes.use('/v1',v1router);

module.exports=routes;