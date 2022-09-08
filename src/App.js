import React, {useEffect, useState} from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'


//Pages
import NavigationPage from './Pages/Home/NavigationPage'
import HomePage from './Pages/Home/HomePage'
import ProjectsPage from './Pages/Project/ProjectsPage'
import Project from './Pages/Project/Project'
import EducationPage from './Pages/Career/EducationPage'
import WorkPage from './Pages/Career/WorkPage'
import SkillsPage from './Pages/Skills/SkillsPage'


function App() {
  const [data,setData]=useState([]);

  useEffect(() =>{
    axios.get("https://elisloutos.github.io/Portfolio-Data/data.json")
    .then(res => {
      console.log(res)
      setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])
  return (
    <HashRouter>
    <header>
      <NavigationPage/>
    </header>
      <Routes>
      <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/projects"  element={<ProjectsPage data={data}/>}/>
        <Route exact path='/projects/:param_id' element={<Project data={data}/>} />
        <Route exact path="/education" element={<EducationPage data={data}/>}/>
        <Route exact path="/work" element={<WorkPage data={data}/>}/>
        <Route exact path="/skills" element={<SkillsPage data={data}/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
