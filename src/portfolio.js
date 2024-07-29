import Resume from './utils/Iyin_Oluleke_Resume.pdf';

const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'Iyinoluwa.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Iyinoluwa Oluleke',
  role: 'Front End Engineer',
  description:
    'An enthusiastic front end developer with drive and determination needed to resolve complex issues. Developed commercial applications for service-based businesses. Eager to contribute to team success through hard work, attention to detail and excellent organizational skills. In short I love to create technology with the main goal of solving real-life problems and create value for humanity.',
  resume: Resume,
  social: {
    linkedin: 'https://www.linkedin.com/in/iyinoluwa-oluleke-31a51714b/',
    github: 'https://github.com/iyin21',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  
  {
    name: 'Voriancorelli matching app',
    description:
      "Voriancorelli is a agric/food commodities value chain aggregator platform (like a marketplace) to match Commodities Aggregators/Large Scale farmers/Food suppliers (Like Thrive Agric) with Food Processors that need their Supplies (Honeywell, Dangote, Flourmills, etc).",   
    stack: ['Nextjs', 'TypeScript', 'Tailwind CSS'],
    // sourceCode: 'https://github.com',
    
    livePreview: 'https://voriancorelli-frontend-two.vercel.app/',
  },
  {
    name: "Finder's force",
    description:
      "A platform that matches operatives(individuals with the right skill set looking for temp jobs) to depots(companies, organizations or individuals interested in listing temp job roles on the platform with the sole aim of linking operatives with the right skillset) seamlessly and  allows endless job opportunities for operatives without fear of being underpaid ",   
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    // sourceCode: 'https://github.com',
    
    livePreview: 'https://ff.iqubesolutions.com.ng',
  },
  {
    name: 'Admin Rokswood Gas',
    description:
      "This is an admin platform that monitors gas orders, registers and approves customers and agents to the platform, data management ans set gas rates.",   
    stack: ['Reactjs', 'TypeScript', 'Tailwind CSS'],
    // sourceCode: 'https://github.com',
    
    livePreview: 'https://admin.rokswoodgas.com/',
  },
  {
    name: 'Osnon Academy',
    description:
      "This is a school website that showcases the academic calendars, upcoming events, important alerts, school authorities, gallery and admission",   
    stack: ['WordPress'],
    // sourceCode: 'https://github.com',
    
    livePreview: 'https://osnonacademy.org/',
  },
  {
    name:"Finder's force",
    description:"Finder's force mobile app is an application for operatives(individuals with the right skill set looking for temp jobs) to apply to jobs  listed on the  platform seamlessly and  allows endless job opportunities for operatives without fear of being underpaid",
    stack: ["React Native", "TypeScript"],
    livePreview: 'https://apps.apple.com/bg/app/findersforce-agency-shifts/id6471681754',
  },
  {
    name:"Treepz",
    description:"Treepz mobile app is an application for users to rent, bargain, and pay for fleets listed on the Treepz platform.",
    stack: ["React Native", "TypeScript"],
    livePreview: 'https://apps.apple.com/ng/app/treepz/id1475245410',
  },
  {
    name: "Ify's kitchen",
    description:
      'This platform serves as an exclusive engagement hub for all Ify’s kitchen clients, fans and followers. It houses unique and creative content for easy access, and delivers cooking classes without using other platforms and thereby generating constant revenue',
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://staging.ifyskitchen.com/',
  },
  {
    name: 'Enterprising Ventures of color',
    description:
      "Enterprising Ventures of color is a platform for empowering nonprofits, and Catalyzing change",   
    stack: ['Wix'],
    // sourceCode: 'https://github.com',
    
    livePreview: 'https://www.enventofcolor.com/',
  },
  {
    name: 'Virtual Medic Clinic(patient)',
    description:
      "Virtual Medical Clinic is a virtual hospital where people can participate in the end to end flow of medical examination. People will be able to register as patients, book consultations with medical professionals, be attended to by the medical professionals, receive prognosis (or diagnosis), get prescriptions and/or be referred to physical hospitals where necessary.",
      stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.vmcnigeria.com',
  },
  {
    name: 'Virtual Medic Clinic(Medic)',
    description:
      "Virtual Medical Clinic is a virtual hospital where people can participate in the end to end flow of medical examination. People will be able to register as patients, book consultations with medical professionals, be attended to by the medical professionals, receive prognosis (or diagnosis), get prescriptions and/or be referred to physical hospitals where necessary.",
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.medic.vmcnigeria.com',
  },
  
  {
    name: "Learn with us",
    description:
      'This is a platform owned by iQubelabs where people who want to get into start a career in tech can register for a course of their choice..',
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://lwu.iqubesolutions.com.ng/',
  },
  {
    name: "Sxope",
    description:
      'Sxope is admin application used to monitor trivia questions sent to people through sms, rewards and subscriptions',
    stack: ['HTML', "CSS", "Javascript"],
    // sourceCode: 'https://github.com',
    livePreview: 'https://orange-reporting.iqubesolutions.com.ng/',
  },
  {
    name: "Lendbak",
    description:
      'Lendbak is a one stop shop for all things rentals where one can rent with ease and also lease your items for rental.',
    stack: ['SASS', 'Javscript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://lendbak.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Redux',
  'SASS',
  'wix',
  'webflow',
  'Material UI',
  'Git',
  'Nodejs'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'iyinoluwa.oluleke@gmail.com',
}

export { header, about, projects, skills, contact }

