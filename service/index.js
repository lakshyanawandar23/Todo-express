const TodoRepository=require('../repository/index');
const todo=new TodoRepository();

class TodoService{
    constructor(){
        //inject
    }
     async ping(){
      const resp=await todo.ping();
      return resp;
    }

async create(todotext){
   // console.log(todotext);
      const resp=await todo.createTodo(todotext);
      return resp;
}
async getTodo(){
    const resp=await todo.getTodo();
 //   console.log(resp);
    return resp;
}
   async findbyId(id){
    const resp=await todo.findbyId(id);
    return resp;
   }

}

module.exports=TodoService;