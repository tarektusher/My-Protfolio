import React from 'react'
import ProjectOne from '../Components/ProjectOne'
import { Card } from '@mui/material'
import ProjectTwo from '../Components/ProjectTwo'
import ProjectThree from '../Components/ProjectThree'
import ProjectFive from '../Components/ProjectFive'
import ProjectFour from '../Components/ProjectFour'
import ProjectSix from '../Components/ProjectSix'
function ProjectPage() {
  return (
    <Card sx={{marginTop : '30px', paddingBottom : '50px'}}>
        <p className="text-6xl text-mainColor">Project</p>
        <div className='md : flex justify-evenly items-center flex-wrap gap-4 mx-4 my-10'>
            <ProjectOne></ProjectOne>
            <ProjectTwo></ProjectTwo>
            <ProjectThree></ProjectThree>
            <ProjectFour></ProjectFour>
            <ProjectFive></ProjectFive>
            <ProjectSix></ProjectSix>

        </div>
        
    </Card>
  )
}

export default ProjectPage