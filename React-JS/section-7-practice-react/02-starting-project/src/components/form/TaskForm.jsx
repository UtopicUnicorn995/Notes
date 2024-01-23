export default function TaskForm() {
  return (
    <form className="flex items-start flex-col w-full gap-y-5">
      <h3 className="font-bold text-2xl">Tasks</h3>
      <div className="input-group flex gap-x-3">
        <input className="bg-zinc-300" type="text" name="task" id="task" />
        <button type="button"> Add Task</button>
      </div>
      <div className="input-group flex gap-x-3 relative w-full">
        <input className="bg-zinc-300 w-full p-5 py-8" type="text" p-3 />
        <button className="absolute right-5 bottom-1/2 translate-y-1/2">Clear</button>
      </div>
        <ul>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>
            <li>food</li>

        </ul>
    </form>
  );
}
