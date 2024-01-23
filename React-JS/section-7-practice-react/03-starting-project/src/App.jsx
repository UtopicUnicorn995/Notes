import { useState } from "react";
import SideNavBar from "./Components/SideNavBar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState)

  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} />
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideNavBar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
        {content}
      </main>
    </>
  );
}

export default App;
