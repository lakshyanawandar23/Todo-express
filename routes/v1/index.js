const express=require('express');
const {ping,create,Todos, findId} = require('../../controllers');
const v1router=express.Router();


v1router.get('/ping',ping);
v1router.post('/',create);//to add todo
v1router.get('/',Todos);
v1router.get('/:id',findId); //req params
module.exports=v1router;