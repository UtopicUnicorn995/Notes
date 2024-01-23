import { useState } from "react";
import ProjectForm from "../components/form/ProjectForm";
import Project from "../components/project/Project";

export default function Home() {
  const [haveSelected, setHaveSelected] = useState(true);

  return (
    <div className="sm:pl-64 p-5 text-center w-full h-screen flex flex-col items-center mt-5 gap-y-4">
      {haveSelected ? (
        <Project />
      ) : (
        <>
          <h2 className="font-bold text-2xl">No Project Selected</h2>
          <p className="text-lg">
            Select a project or get started with a new one
          </p>
          <button className="mb-12 bg-gray-800 rounded-xl p-3 pb-4 text-slate-100">
            Create new project
          </button>
        </>
      )}
    </div>
  );
}
