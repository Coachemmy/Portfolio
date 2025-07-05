import Resume from './utils/Emmanuel_Abiola_Resume.pdf';

const header = {
  title: 'CoachEmmy',
}

const about = {
  name: 'Emmanuel Abiola',
  role: 'Software / ML Engineer',
  description:
    'Experienced Software and Machine Learning Engineer skilled in designing scalable systems and deploying AI-driven solutions. Proficient in solving complex problems, optimizing performance, and delivering impactful results. Passionate about innovation, collaboration, and creating intelligent applications that enhance user experiences and drive business success. Seeking challenging roles to grow and contribute meaningfully.',

  resume: Resume,
  social: {
    linkedin: 'https://www.linkedin.com/in/coachemmyb/',
    github: 'https://github.com/coachemmy',
  },
}

const projects = [
  {
    name: 'TrioLens-Dectector',
    description:
      "This project leverages MediaPipe's hand tracking and Gemini AI to create a no-code interface for mathematical problem solving and shape recognition through intuitive gestures.",
    stack: ['Python', 'ML', 'AI'],
    livePreview: 'https://github.com/Coachemmy/TrioLens-Detector',
  },
  {
    name: 'Movieers',
    description:
      'Movieers is a movie recommendation application for discovering and managing your favorite movies by adding up to your movie list. It also includes AI based search for tailored recommendations',
    stack: ['ReactJS', 'TailwindCSS'],
    livePreview: 'https://github.com/Coachemmy/Movieers',
  },
  {
    name: 'ResNet',
    description:
      'This Model when applied to the MNIST dataset (which consists of handwritten digits 0-9) classifies images into one of these 10 categories. It Uses Residual Blocks, extracts Features and makes Predictions ',
    stack: ['Jupyter', 'Python'],
    livePreview: 'https://github.com/Coachemmy/ResNet',
  },
  {
    name: 'Mama Igbo',
    description:
      'A platform dedicated to promoting and preserving the Igbo language and culture. The website offers a range of products and services to support Igbo language education and culture.',
    stack: ['Wordpress', 'PHP', 'CSS'],
    livePreview: 'https://mamaigbo.com/',
  },
  {
    name: 'CEMusic',
    description:
      'Developed a dynamic mockup music platform designed to elevate the experience of listening to Nigerian music. The app offers users to enjoy their favorite tunes on the go.',
    stack: ['React', 'CSS'],
    livePreview: 'https://coachemmymusicapp.netlify.app/',
  },
  {
    name: 'Rokswood Gas',
    description:
      'The customer side of the system allows users to buy gas using tokens. The platform ensures a smooth UX with intuitive transaction managemment and tracking orders.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    livePreview: 'https://r-energy-agents.vercel.app',
  },
  {
    name: 'TROT-CIC',
    description:
      'A UK based Community Interest Company (CIC) that operates as a social enterprise, reinvesting its surpluses into projects and various community-focused activities.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    livePreview: 'https://trot.org.uk',
  },
  {
    name: 'Admin Rokswood Gas',
    description:
      'The super admin can view detailed reports, handle customer and gas rider inquiries, adjust parameters, and ensure smooth operations across board.',
    stack: ['Reactjs', 'TypeScript', 'Tailwind CSS'],
    livePreview: 'https://r-energy-admin.vercel.app/',
  },
  {
    name: 'Identiko Solutions',
    description:
      'Developed a website for Identiko, a company focused on delivering top-tier technology solutions for businesses and individuals in various fields.',
    stack: ['SASS', 'TypeScript', 'React'],
    livePreview: 'https://identikosolutions.com/',
  },

  {
    name: 'Kotlin Reverse Polish Notation Calc',
    description:
      'Developed a Reverse Polish Notation (RPN) calculator application using Kotlin, incorporating features such as SI, and functions.',
    stack: ['Kotlin'],
    livePreview: 'https://github.com/Coachemmy/RPN-calculator-in-Kotlin',
  },
  {
    name: 'WWTBAM TV SHOW GAME',
    description:
      "Developed a prototype of the popular `Who Wants to Be a Millionaire game`. This project replicates the quiz show's format.",
    stack: ['JavaScript, CSS, HTML'],
    livePreview: 'https://github.com/Coachemmy/wwtbam',
  },
  {
    name: 'X and O game',
    description:
      'Developed a holistic implementation of the classic tic-tac-toe game. This project demonstrates proficiency in front-end development and UI design.',
    stack: ['JavaScript, CSS, HTML'],
    livePreview: ' https://github.com/Coachemmy/X-an-dO-game',
  },
]

const skills = [
  'ML',
  'Tailwind',
  'JavaScript',
  'TypeScript',
  'ReactJs',
  'Kotlin',
  'Redux',
  'Python',
  'Wordpress',
  'Material UI',
  'Git',
  'Nodejs'
]

const contact = {
  email: 'coachemmyb@gmail.com',
}

export { header, about, projects, skills, contact }

