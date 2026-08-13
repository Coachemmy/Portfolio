import Resume from './utils/Emmanuel_Abiola_Resume.pdf';

const about = {
  name: 'CoachEmmy',
  role: 'Software / AI Engineer & Educator',
  description:
    'Here, we help people master cryptocurrency trading, AI content creation, and modern programming skills through personalized coaching and structured courses.',

  resume: Resume,
  social: {
    linkedin: 'https://www.linkedin.com/in/coachemmyb/',
    github: 'https://github.com/coachemmy',
  },
}

const careerServices = [
  {
    id: 'crypto-coaching',
    title: 'Crypto Coaching',
    tagline: 'Master Cryptocurrency Trading & Investment',
    description: 'Learn proven strategies for cryptocurrency trading, portfolio management, and passive income generation through staking and DeFi protocols.',
    duration: 'Personalized 1-on-1 Sessions',
    price: 149999,
    icon: '💰',
    features: [
      'Trading strategies & technical analysis',
      'Portfolio management & allocation',
      'Risk management techniques',
      'DeFi & staking fundamentals',
      'Real-time market insights',
      'Direct WhatsApp support'
    ],
    popular: true,
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦149,999'
    }
  },
  {
    id: 'faceless-ai',
    title: 'Faceless AI Content Creation',
    tagline: 'Build Automated Content Empire',
    description: 'Create profitable faceless YouTube channels and content automation systems using cutting-edge AI tools without showing your face.',
    duration: 'Personalized 1-on-1 Sessions',
    price: 99999,
    icon: '🤖',
    features: [
      'AI video generation tools',
      'Niche selection & market research',
      'Content automation systems',
      'Monetization strategies',
      'SEO optimization for YouTube',
      'Channel growth tactics'
    ],
    popular: true,
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦99,999'
    }
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    tagline: 'Professional Visual Identity',
    description: 'High-quality graphics design services for logos, social media content, flyers, banners, and branding materials.',
    duration: 'Per Project',
    price: 99999,
    icon: '🎨',
    features: [
      'Logo design & branding',
      'Social media graphics',
      'Flyers & brochures',
      'Banner & poster design',
      'Business cards',
      'Custom illustrations'
    ],
    popular: false,
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦99,999'
    }
  }
]

const techCourses = [
  {
    id: 'html-class',
    title: 'HTML Fundamentals',
    tagline: 'Build the Web from Scratch',
    description: 'Master the building blocks of web development with semantic HTML5, accessibility standards, and best practices.',
    duration: '6 Weeks',
    price: 49999,
    icon: '🌐',
    features: [
      'HTML5 semantic structure',
      'Forms & input elements',
      'Tables & media elements',
      'Accessibility (a11y)',
      'SEO fundamentals',
      'Real-world projects'
    ],
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦49,999' 
    }
  },
  {
    id: 'css-class',
    title: 'CSS Styling Mastery',
    tagline: 'Design Beautiful Websites',
    description: 'Transform plain HTML into stunning websites with modern CSS including Flexbox, Grid, animations, and responsive design.',
    duration: '6 Weeks',
    price: 49999,
    icon: '🎨',
    features: [
      'CSS selectors & properties',
      'Flexbox & Grid layouts',
      'Responsive design techniques',
      'CSS animations & transitions',
      'CSS variables & architecture',
      'Tailwind CSS basics'
    ],
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦49,999'
    }
  },
  {
    id: 'javascript-class',
    title: 'JavaScript Development',
    tagline: 'Bring Websites to Life',
    description: 'Learn JavaScript from fundamentals to advanced concepts with ES6+ features and async programming.',
    duration: '6 Weeks',
    price: 79999,
    icon: '⚡',
    features: [
      'JavaScript fundamentals',
      'DOM manipulation',
      'ES6+ features mastery',
      'Async/Await & promises',
      'API integration',
      'Interactive projects'
    ],
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦79,999'
    }
  },
  {
    id: 'python-class',
    title: 'Python Programming',
    tagline: 'The Language of AI & Automation',
    description: 'Master Python programming for data science, automation, and AI/ML applications with hands-on projects.',
    duration: '6 Weeks',
    price: 119999,
    icon: '🐍',
    features: [
      'Python basics & syntax',
      'Data structures & algorithms',
      'File handling & I/O',
      'Libraries & frameworks',
      'Automation scripts',
      'API development'
    ],
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦119,999'
    }
  },
  {
    id: 'machine-learning-class',
    title: 'Machine Learning',
    tagline: 'Build Intelligent Systems',
    description: 'Dive into ML algorithms, neural networks, and AI applications. Learn to build predictive models from scratch.',
    duration: '6 Weeks',
    price: 179999,
    icon: '🤖',
    features: [
      'ML fundamentals & concepts',
      'Supervised & unsupervised learning',
      'Neural networks basics',
      'Model training & evaluation',
      'Real-world ML projects',
      'Career guidance & portfolio'
    ],
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦179,999'
    }
  },
  {
    id: 'git-class',
    title: 'Git & Version Control',
    tagline: 'Master Code Collaboration',
    description: 'Learn Git from basics to advanced workflows. Master branching strategies and professional development practices.',
    duration: '6 Weeks',
    price: 59999,
    icon: '📦',
    features: [
      'Git fundamentals & commands',
      'Branching & merging strategies',
      'GitHub collaboration',
      'Pull requests & code reviews',
      'Conflict resolution',
      'Professional workflows'
    ],
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
          amount: '₦59,999'
    }
  }
]

const reviews = [
  {
    name: 'Tunde Omoyeni',
    location: 'Lagos, Nigeria',
    rating: 5,
    review: 'CoachEmmy\'s crypto coaching transformed my trading journey. I went from losing money to consistently profitable in just 3 months!',
    course: 'Crypto Coaching'
  },
  {
    name: 'Adaeze Okonkwo',
    location: 'Ibadan, Nigeria',
    rating: 5,
    review: 'The Python course was exactly what I needed. Simple, practical, and the WhatsApp support was incredible. Got my first data analyst job!',
    course: 'Python Programming'
  },
  {
    name: 'Emeka Nwosu',
    location: 'Port Harcourt, Nigeria',
    rating: 5,
    review: 'Faceless AI content creation course helped me build 3 YouTube channels. Now earning passive income monthly. Highly recommended!',
    course: 'Faceless AI'
  },
 
]

const faq = [
  {
    question: 'How do I enroll in a course?',
    answer: 'Simply click the "Enroll Now" button, fill in your details, and you will receive payment instructions via WhatsApp. Once payment is confirmed, you get immediate access to course materials.'
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept bank transfers (GTBank and Opay), and for crypto coaching, we also accept cryptocurrency payments. Payment instructions are provided after enrollment form submission.'
  },
  {
    question: 'Are there refunds if I cannot complete the course?',
    answer: 'Due to the digital nature of our content and personalized coaching, we have a no-refund policy once you have accessed course materials or attended coaching sessions.'
  },
  {
    question: 'Will I get a certificate after completing a course?',
    answer: 'Yes! Upon successful completion of any course, you will receive a certificate of completion that you can add to your portfolio and LinkedIn profile.'
  },
  {
    question: 'How are the online classes conducted?',
    answer: 'Classes are conducted via WhatsApp groups and/or Zoom meetings depending on the course. All materials are shared digitally, and you get lifetime access to course content.'
  },
  {
    question: 'What if I miss a class?',
    answer: 'All sessions are recorded and shared with participants. You can catch up at your own pace, and instructors are available for Q&A within designated support hours.'
  },
  {
    question: 'Do you offer job placement after completing courses?',
    answer: 'While we do not guarantee job placement, we provide career guidance, portfolio building tips, and connect students with job opportunities in our network.'
  },
  {
    question: 'Can I pay in installments?',
    answer: 'For the 6-week courses, full payment is required before access is granted. For coaching programs, we may offer payment plans - please contact us to discuss options.'
  }
]

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
      'The customer side of the system allows users to buy gas using tokens. The platform ensures a smooth UX with intuitive transaction management and tracking orders.',
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
    stack: ['JavaScript', 'CSS', 'HTML'],
    livePreview: 'https://github.com/Coachemmy/wwtbam',
  },
  {
    name: 'X and O game',
    description:
      'Developed a holistic implementation of the classic tic-tac-toe game. This project demonstrates proficiency in front-end development and UI design.',
    stack: ['JavaScript', 'CSS', 'HTML'],
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
  phone: '+86 18 2025 61437',
  whatsapp: 'https://wa.me/8618202561437',
}

const travelServices = [
  {
    id: 'china-relocation',
    title: 'China Travel Consultation',
    tagline: 'China Travel Consultation Guidance',
    description: 'Expert guidance for business travel and relocation to China. Complete step-by-step documentation, expat guidance, and personalized recommendations.',
    duration: 'Per Session/Hour',
    price: 49999,
    icon: '🇨🇳',
    features: [
      'Documentation required checklist',
      'Step-by-step visa guidance',
      'Expatriate living advice',
      'Business travel planning',
      'China relocation support',
      'WhatsApp support'
    ],
    popular: true,
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦49,999'
    }
  },
  {
    id: 'tech-career',
    title: 'Tech Career Consulting',
    tagline: 'Tech Career Path Guidance',
    description: 'Get expert advice on choosing the right tech path, learning strategies, career progression, and how to navigate the tech industry successfully.',
    duration: 'Per Session/Hour',
    price: 79999,
    icon: '💻',
    features: [
      'Tech path recommendations',
      'Career progression guidance',
      'Skill development planning',
      'Learning roadmap creation',
      'Tech industry insights',
      'Personalized mentorship',
      'CV + linkedIn + Roadmap'
    ],
    popular: true,
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦79,999'
    }
  },
  {
    id: 'currency-exchange',
    title: 'Currency Exchange',
    tagline: 'Naira ↔ Yuan Exchange',
    description: 'Secure and competitive currency exchange services for Naira (NGN) and Yuan (CNY) with fast transactions and transparent rates.',
    duration: 'On-demand',
    price: null,
    icon: '💱',
    features: [
      'Naira to Yuan',
      'Yuan to Naira',
      'Competitive rates',
      'Fast transactions',
      'Secure transfers',
      'WhatsApp support'
    ],
    popular: false,
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: 'Contact for rate'
    }
  }
]

const webServices = [
  {
    id: 'personal-small-business',
    title: 'Personal & Small Business(AI-Enabled)',
    tagline: 'Professional Online Presence',
    description: 'Create stunning personal websites, portfolios, and small business sites to showcase your brand, skills, and services.',
    duration: '1-3 Weeks',
    price: 399999,
    icon: '🌐',
    features: [
      'Personal websites & portfolios',
      'Small business websites',
      'Responsive design',
      'Custom branding',
      'Contact forms',
      'Basic SEO optimization'
    ],
    popular: true,
    priceRange: '₦399,999-₦699,999',
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦399,999-₦699,999'
    }
  },
  {
    id: 'ngo-school',
    title: 'NGO & Educational(AI-Enabled)',
    tagline: 'Amplify Your Cause',
    description: 'Impactful websites for NGOs, schools, colleges, and educational institutions with specialized features.',
    duration: '3-6 Weeks',
    price: 1199999,
    icon: '🏛️',
    features: [
      'NGO & charity websites',
      'School & college portals',
      'Donation integration',
      'Student management',
      'Event management',
      'News & announcements'
    ],
    popular: true,
    priceRange: '₦799,999-₦1,499,999',
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦799,999-₦1,499,999'
    }
  },
  {
    id: 'ecommerce-enterprise',
    title: 'E-commerce & Enterprise(AI-Enabled)',
    tagline: 'Scale Your Business',
    description: 'Full-featured e-commerce platforms and enterprise-level web applications for businesses of all sizes.',
    duration: '4-12 Weeks',
    price: 1999999,
    icon: '🛒',
    features: [
      'Online stores',
      'Enterprise web apps',
      'Payment gateways',
      'Inventory management',
      'Customer accounts',
      'Analytics & reporting'
    ],
    popular: true,
    priceRange: '₦1,999,999-₦4,999,999',
    paymentDetails: {
      bankName: 'GTBank',
      accountName: 'Emmanuel Abiola',
      accountNumber: '0123456789',
      amount: '₦1,999,999-₦4,999,999'
    }
  }
]

export { about, projects, skills, contact, careerServices, techCourses, reviews, faq, travelServices, webServices }