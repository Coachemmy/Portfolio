import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

const ProjectContainer = ({ project }) => (
  <div className='bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col'>
    <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-3'>{project.name}</h3>

    <p className='project__description text-gray-600 dark:text-gray-300 mb-4 flex-grow'>{project.description}</p>
    
    {project.stack && (
      <ul className='flex flex-wrap gap-2 mb-4'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='px-3 py-1 bg-primary/10 text-primary text-sm rounded-full'>
            {item}
          </li>
        ))}
      </ul>
    )}

    <div className='flex gap-4 mt-auto'>
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noreferrer" 
          aria-label='source code'
          className='link hover:text-primary transition-colors duration-300'
        >
          <GitHubIcon style={{ fontSize: '1.5rem' }} />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          target="_blank"
          rel="noreferrer" 
          aria-label='live preview'
          className='link hover:text-primary transition-colors duration-300'
        >
          <LaunchIcon style={{ fontSize: '1.5rem' }} />
        </a>
      )}
    </div>
  </div>
)

export default ProjectContainer
