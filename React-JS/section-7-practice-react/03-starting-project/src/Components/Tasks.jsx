import NewTask from "./NewTask"
import { useState } from "react"
import Button from "./Button"
export default function Tasks({onDelete, onAdd, tasks}){

    console.log(tasks)
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask handleAddTasks={onAdd}/>
            {
                tasks.length === 0 ? <p className="text-stone-800 my-4">This project does not have any task yet</p> :
                <ul className="mt-5">
                    {
                            tasks.map(task => (
                                <li key={task['id']} className="my-2 w-full flex justify-between  text-stone-800"><span>{task['text']}</span> <Button onClick={() => onDelete(task['id'])} className="ml-auto">delete</Button></li>
                            ))
                }
                </ul>
            }
            
        </section>
    )
}