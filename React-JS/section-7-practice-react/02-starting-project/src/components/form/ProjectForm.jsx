export default function CreateProject() {
  return (
    <>
      <form className="w-full p-20">
        <div className="button-header flex justify-end gap-x-6">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn bg-gray-900 px-5 py-2 rounded-lg text-white">
            Save
          </button>
        </div>
        <div className="project-input__groups flex flex-col gap-y-5">
          <div className="input-group flex flex-col gap-y-1 items-start">
            <label className="font-bold text-lg uppercase" htmlFor="title">title</label>
            <input className="bg-zinc-300 w-full p-2 focus:outline-stone-400" type="text" name="title" />
          </div>
          <div className="input-group flex flex-col gap-y-1 items-start">
            <label className="font-bold text-lg uppercase" htmlFor="description">description</label>
            <textarea className="bg-zinc-300 w-full p-2 focus:outline-stone-400" name="description" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="input-group flex flex-col gap-y-1 items-start">
            <label className="font-bold text-lg uppercase" htmlFor="description">due date</label>
            <input className="bg-zinc-300 w-full p-2 focus:outline-stone-400" type="date" name="date" />
          </div>
        </div>
      </form>
    </>
  );
}
