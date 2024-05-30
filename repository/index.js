
let todo=[];
class TodoRepository{
    constructor(){
    
    }      
    async ping (){
      // console.log("repo is call ");
        return "pong";
    }

  async createTodo(todotext){
    //console.log(todotext);
     todo.push({
        id:todo.length,
        todotext
     });
     return todo;
  }
   async getTodo(){
    return  todo;
   }

   async findbyId(id){
    const resp=todo.find(todo=>todo.id==Number(id));
   // console.log(resp);
    try {
        return resp;
    } catch (error) {
        console.log("not found");
        return "Not found ";
    }
   }
}

module.exports=TodoRepository;