import { useState } from "react";

export default function NewTask() {
    const [enteredTask, setEnteredTask] = useState()

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(){
        setEnteredTask('')
    }

  return (
    <div className="flex gap-4 items-center">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} />
      <button className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  );
}
