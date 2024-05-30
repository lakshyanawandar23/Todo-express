const TodoService=require('../service/index');
const todo=new  TodoService();
async function ping(req,res){
    const resp=await todo.ping();
    res.send({data:resp});
}
async function create(req,res){
   // console.log(req.body);
    const resp=await todo.create(req.body);
    res.send(resp);
}
async function Todos(req,res){
    const resp=await todo.getTodo();
    res.send(resp);
}
async function findId(req,res){
   // console.log(req.params.id);
    const resp=await todo.findbyId(req.params.id);
    res.send(resp);
}
module.exports={
    ping,
    create,
    Todos,
    findId,
};