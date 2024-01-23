import TaskForm from "../form/TaskForm"

export default function Project(){

    return(
        <>
        <section className="project flex flex-col gap-y-4 items-start p-16 max-w-4xl w-full">

        <div className="project-header__container flex flex-row justify-between w-full ">
            <h2 className="text-2xl font-bold capitalize">shit react</h2>
            <button>Delete</button>
        </div>
        <div className="project-date">
            Dec 29. 2024
        </div>
        <div className="project-description">
            asdasd
        </div>
        <hr className="w-full h-px bg-stone-400" />
        <TaskForm/>
        </section>

    </>
    )
}