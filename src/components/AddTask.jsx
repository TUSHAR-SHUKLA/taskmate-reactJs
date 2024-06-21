import React from 'react'

export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (event)=>{
    event.preventDefault();
    if(task.id){
    const date = new Date();
      const updatedTaskList = tasklist.map((todo) => (
        todo.id === task.id ? { id: todo.id, name:task.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }: todo));
        setTasklist(updatedTaskList)
      setTask({})
    }else{
    const date = new Date();
    
    const newTask = {
      id:date.getTime(), 
      name:event.target.task.value, 
      time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
      console.log(newTask);

      setTasklist([...tasklist, newTask])
      setTask({})
  }
}

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" value={task.name || ""} name="task" placeholder="add task" autoComplete='off' maxLength={30} onChange={(e)=> setTask({...task, name: e.target.value})} />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}
