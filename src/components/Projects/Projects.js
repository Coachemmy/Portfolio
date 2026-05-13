import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section mt-40'>
      <h2 className='section__title'>Projects</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
