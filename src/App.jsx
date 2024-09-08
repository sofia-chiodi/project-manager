import { useState } from 'react';

import Sidebar from './components/Sidebar';
import NoProjectSelected from './components/NoProjectSelected';
import NewProject from './components/NewProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // Nothing
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, // Adding a new project
      };
    });
  }

  function handleProjectAdded(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleProjectAdded} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar onAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
