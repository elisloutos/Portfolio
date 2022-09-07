import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


//Pages
import NavigationPage from './Pages/Home/NavigationPage'
import HomePage from './Pages/Home/HomePage'
import ProjectsPage from './Pages/Project/ProjectsPage'
import Project from './Pages/Project/Project'
import EducationPage from './Pages/Career/EducationPage'
import WorkPage from './Pages/Career/WorkPage'
import SkillsPage from './Pages/Skills/SkillsPage'
//Data
import data from "./Data/data.json"

function App() {
  return (
    <BrowserRouter>
    <header>
      <NavigationPage/>
    </header>
      <Routes>
      <Route exact path="/home" element={<HomePage/>}/>
        <Route exact path="/projects"  element={<ProjectsPage data={data}/>}/>
        <Route exact path='/projects/:param_id' element={<Project data={data}/>} />
        <Route exact path="/education" element={<EducationPage data={data}/>}/>
        <Route exact path="/work" element={<WorkPage data={data}/>}/>
        <Route exact path="/skills" element={<SkillsPage data={data}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
