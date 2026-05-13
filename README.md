# CoachEmmy Portfolio Website

A professional, modern portfolio website showcasing career services, tech courses, web development services, and travel & tourism consulting. Built with React.js and Tailwind CSS.

## 🌟 Overview

CoachEmmy is a multifaceted platform offering:
- **Career Services**: Crypto coaching, Faceless AI content creation, and Graphics design
- **Tech Courses**: 6-week intensive training programs (HTML, CSS, JavaScript, Python, Machine Learning, Git)
- **Web Development Services**: Personal websites, NGO/School portals, E-commerce platforms
- **Travel & Tourism**: China relocation guidance, tech career consulting, currency exchange

## 🚀 Features

### User Experience
- **Smooth Animations**: Fade-in, slide-in, and hover effects throughout
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Interactive Carousels**: Tech courses displayed in a 2-item carousel
- **WhatsApp Integration**: Direct communication for inquiries and enrollments
- **Modern UI**: Clean, professional design with gradient backgrounds and shadows

### Functionality
- **Enrollment System**: Modal-based enrollment with payment details
- **Contact Forms**: Service-specific inquiry forms
- **Navigation**: Smooth scrolling and proper routing
- **Project Showcase**: Portfolio gallery with live preview links

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Icons**: Material UI Icons
- **Build Tool**: Create React App

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm start
# or
yarn start
```

The application will open at `http://localhost:3000`

4. **Build for production**
```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   └── About.js
│   │   ├── CareerServices/
│   │   │   └── CareerServices.js
│   │   ├── EnrollmentModal/
│   │   │   └── EnrollmentModal.js
│   │   ├── FAQ/
│   │   │   └── FAQ.js
│   │   ├── Footer/
│   │   │   └── Footer.js
│   │   ├── Navbar/
│   │   │   └── Navbar.js
│   │   ├── PortfolioGallery/
│   │   │   └── PortfolioGallery.jsx
│   │   ├── ProjectContainer/
│   │   │   └── ProjectContainer.js
│   │   ├── Reviews/
│   │   │   └── Reviews.js
│   │   ├── TechCourses/
│   │   │   └── TechCourses.js
│   │   ├── TravelServices/
│   │   │   └── TravelServices.js
│   │   └── WebServices/
│   │       └── WebServices.js
│   ├── pages/
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   └── Projects.js
│   ├── utils/
│   │   └── Emmanuel_Abiola_Resume.pdf
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── portfolio.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 💼 Services Offered

### Career Services

#### 1. Crypto Coaching (₦35,000)
- **Duration**: Personalized 1-on-1 Sessions
- **Features**:
  - Trading strategies & technical analysis
  - Portfolio management & allocation
  - Risk management techniques
  - DeFi & staking fundamentals
  - Real-time market insights
  - Direct WhatsApp support

#### 2. Faceless AI Content Creation (₦35,000)
- **Duration**: Personalized 1-on-1 Sessions
- **Features**:
  - AI video generation tools
  - Niche selection & market research
  - Content automation systems
  - Monetization strategies
  - SEO optimization for YouTube
  - Channel growth tactics

#### 3. Graphics Design (₦15,000)
- **Duration**: Per Project
- **Features**:
  - Logo design & branding
  - Social media graphics
  - Flyers & brochures
  - Banner & poster design
  - Business cards
  - Custom illustrations

### Tech Courses (6 Weeks Each - ₦20,000)

1. **HTML Fundamentals**: Build the web from scratch
2. **CSS Styling Mastery**: Design beautiful websites
3. **JavaScript Development**: Bring websites to life
4. **Python Programming**: The language of AI & automation
5. **Machine Learning**: Build intelligent systems
6. **Git & Version Control**: Master code collaboration

### Web Development Services

#### 1. Personal & Small Business (₦100k - ₦250k)
- Personal websites & portfolios
- Small business websites
- Responsive design
- Custom branding
- Contact forms
- Basic SEO optimization

#### 2. NGO & Educational (₦300k - ₦800k)
- NGO & charity websites
- School & college portals
- Donation integration
- Student management
- Event management
- News & announcements

#### 3. E-commerce & Enterprise (₦500k - ₦1M+)
- Online stores
- Enterprise web apps
- Payment gateways
- Inventory management
- Customer accounts
- Analytics & reporting

### Travel & Tourism Services

#### 1. China Travel & Relocation (₦15,000)
- Documentation required checklist
- Step-by-step visa guidance
- Expatriate living advice
- Business travel planning
- China relocation support
- WhatsApp support

#### 2. Tech Career Consulting (₦25,000)
- Tech path recommendations
- Career progression guidance
- Skill development planning
- Learning roadmap creation
- Tech industry insights
- Personalized mentorship

#### 3. Currency Exchange
- Naira ↔ Yuan exchange
- Competitive rates
- Fast transactions
- Secure transfers
- WhatsApp support

## 📞 Contact Information

- **Email**: coachemmyb@gmail.com
- **Phone**: +86 18 2025 61437
- **WhatsApp**: +86 18 2025 61437
- **LinkedIn**: https://www.linkedin.com/in/coachemmyb/
- **GitHub**: https://github.com/coachemmy

## 🎨 Design Features

### Animations
- `fadeIn`: Elements fade in from bottom
- `fadeInLeft`: Elements slide in from left
- `fadeInRight`: Elements slide in from right
- `slideInUp`: Elements slide up from below
- `scaleIn`: Elements scale up on appear
- `float`: Continuous floating animation
- `pulseGlow': Pulsing glow effect
- `bounceSoft`: Gentle bouncing animation

### Color Scheme
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Accent**: Yellow (#F59E0B)
- **Backgrounds**: White and light gray gradients

## 📱 Pages & Routes

### Home Page (`/`)
- About section with profile image
- Career Services (3 cards with images)
- Tech Courses (2-item carousel)
- Web Services (3 categories)
- Travel & Tourism (3 services)
- Reviews section
- FAQ section

### Projects Page (`/projects`)
- Portfolio gallery
- Project cards with tech stack
- Live preview links
- GitHub repository links

### Contact Page (`/contact`)
- Contact form
- Google Maps integration
- Contact information
- Social media links

## 💳 Payment Process

### For Tech Courses & Career Services
1. Click "Enroll Now" on desired course/service
2. Fill in enrollment form (name, email, WhatsApp)
3. Receive payment details via modal
4. Make payment to:
   - **Bank**: GTBank
   - **Account Name**: Emmanuel Abiola
   - **Account Number**: 0123456789
5. Send payment screenshot via WhatsApp
6. Get immediate access to course materials

### For Web Services
1. Click "Reach Out via WhatsApp" on desired service
2. Fill contact form with project details
3. Submit to open WhatsApp
4. Discuss requirements and get personalized quote
5. Payment upon agreement

### For Travel Services
1. Click "Enroll Now" or "Contact Us"
2. Fill inquiry form
3. Submit to open WhatsApp
4. Receive personalized guidance

## 🚀 Deployment

### Using Vercel
```bash
npm run build
vercel deploy
```

### Using Netlify
```bash
npm run build
netlify deploy --prod
```

### Using GitHub Pages
```bash
npm run build
# Deploy build/ folder to gh-pages branch
```

## 📊 Key Metrics

- **500+** Students Trained
- **50+** Projects Completed
- **10+** Years Experience
- **98%** Customer Satisfaction

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please contact via the provided channels.

## 📄 License

This project is proprietary and owned by CoachEmmy.

## 🙏� Support

For any issues, questions, or support:
- Email: coachemmyb@gmail.com
- WhatsApp: +86 18 2025 61437

---

**Built with ❤️ by CoachEmmy**