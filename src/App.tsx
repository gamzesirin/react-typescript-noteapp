import Input from "./components/input";
import Message from "./components/message";
import { useState } from "react";

const App:React.FC=() =>{
const [todos, setTodos] = useState<string>();
const [todoList, setTodoList] = useState<string[]>([]);

console.log(todoList);

const deleteMessage = (id:number)=>{
  setTodoList(todoList.filter((todoList,i)=>i!==id));
}

const addMessage =()=>{
  if(todos){
    setTodoList([...todoList,{message:todos, id:todoList.length+1}]);
    setTodos("");
  }
}
return (
    <>
    <Input addMessage={addMessage} todos={todos} setTodos={setTodos}/>
    <Message todolist={todoList} deleteMessage={deleteMessage}/>
    </>
  )
}

export default App
