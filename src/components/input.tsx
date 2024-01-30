
type IProps={
    todos:string|undefined,
    setTodos:React.Dispatch<React.SetStateAction<string|undefined>>
    addMessage:()=>void
  }

const input:React.FC<IProps> = ({todos,setTodos,addMessage}) => {
  return (
    <div className="container">
        <input className="inputFields" value={todos} onChange={e=>{setTodos(e.target.value)}} type="text" placeholder="Notunuzu giriniz..."/>
        <button className="addButton" onClick={addMessage}>Ekle</button>
    </div>
  )
}

export default input