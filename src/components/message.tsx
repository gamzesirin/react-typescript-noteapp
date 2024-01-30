import { todoList } from "../types/Type"

type Props={
    todolist:todoList[],
    deleteMessage:(id:number)=>void
}


const message:React.FC<Props> = ({todolist, deleteMessage}) => {
  return (
    <div className="messageContainer">{
        todolist.map((todolist ,i)=>(
             <div className="todoItem" key={i}>{todolist.message} - <span className="deleteButton" onClick={()=>{deleteMessage(todolist.id)}} style={{cursor:"pointer", display:"flex", flexDirection:"row", gap:"5px", justifyContent:"center" , alignItems:"center"}}>x</span></div>
        ))
    }
    </div>
  )
}

export default message