import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleNavList = () => setShowNavList(!showNavList)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setShowNavList(false)
    if (location.pathname !== '/' && href.startsWith('/#')) {
      const sectionId = href.replace('/#', '')
      window.location.href = `/#${sectionId}`
    }
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Affiliate', href: '/affiliate' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ${isScrolled ? 'bg-white/95 shadow-lg shadow-gray-200/50' : 'bg-transparent'}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <Link 
            to='/' 
            className='text-2xl font-bold text-primary font-dancing hover:scale-105 transition-transform duration-300'
          >
            CoachEmmy
          </Link>

          <div className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className='text-gray-700 hover:text-primary transition-all duration-300 font-medium hover:-translate-y-0.5 relative group'
              >
                {item.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full' />
              </Link>
            ))}
          </div>

          <button
            type='button'
            onClick={toggleNavList}
            className='md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 hover:scale-110'
            aria-label='toggle navigation'
          >
            {showNavList ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {showNavList && (
          <div className='md:hidden pb-4 animate-fadeIn'>
            <div className='flex flex-col space-y-2 bg-white rounded-xl p-4 shadow-lg'>
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className='text-gray-700 hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/5'
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar