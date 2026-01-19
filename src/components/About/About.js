import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    
    <div className='about center'
    style={{marginTop: '20px'}}>
      {name && (
        <h1 style={{marginTop: '150px', marginBottom: '40px', textAlign: 'center'}}>
         Welcome Onboard To <br/> <span className='about__name'
          style={{color: 'red'}}>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'  style={{fontSize: '20px'}}> Who am I: A {role}</h2>}
      <p className='about__desc' style={{marginTop: '10px',textAlign: 'center'}}>{description && description}</p>

      <div className='about__contact center' style={{marginTop: '6%', gap: '20%', textAlign: 'center'}}>
        {resume && (
          <a href={resume} target = "_blank" rel="noreferrer" >
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
              style={{textAlign: 'center'}}
                href={social.github}
                target = "_blank"
                rel="noreferrer"
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
              
                href={social.linkedin}
                target = "_blank"
                rel="noreferrer"
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
