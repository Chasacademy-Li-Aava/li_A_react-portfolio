import React from 'react'
import ProjectItem from './Projectitem'
import ProjectImg1 from '../assets/ProjectImg1.jpg'
import ProjectImg2 from '../assets/ProjectImg2.jpg'
import ProjectImg3 from '../assets/ProjectImg3.jpg'
import ProjectImg4 from '../assets/ProjectImg4.jpg'

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md_pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolorum quas ipsum pariatur, libero laboriosam aperiam deleniti aliquam saepe voluptatibus ab assumenda ducimus earum sit vel eum voluptatem adipisci fuga.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={ProjectImg1} title='Project 1' />
        <ProjectItem img={ProjectImg2} title='Project 2' />
        <ProjectItem img={ProjectImg3} title='Project 3' /> 
        <ProjectItem img={ProjectImg4} title='Project 4' />
      </div>
    </div>
  );
}

export default Projects