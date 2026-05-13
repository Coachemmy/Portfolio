import uniqid from 'uniqid'
import { skills } from '../../portfolio'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='flex flex-wrap justify-center gap-4 mt-8'>
        {skills.map((skill) => (
          <li key={uniqid()} className='px-6 py-3 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors duration-300'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
