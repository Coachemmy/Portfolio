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
      setIsScrolled(window.scrollY > 40)
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
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-juicy ${
      isScrolled || showNavList
        ? 'py-2 md:py-0'
        : 'py-4 md:py-5'
    }`}>
      {/* Gradient border bottom reveal on scroll */}
      <div className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-gradient-brand transition-opacity duration-700 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />

      <div className={`max-w-7xl mx-auto px-3 sm:px-5 lg:px-7 transition-all duration-700 ${
        isScrolled || showNavList
          ? 'mt-2 md:mt-3'
          : ''
      }`}>
        <div className={`relative flex justify-between items-center rounded-2xl md:rounded-3xl transition-all duration-700 ease-juicy overflow-hidden ${
          isScrolled || showNavList
            ? 'glass shadow-juicy py-2 md:py-3 px-3 md:px-6 border border-white/50'
            : 'bg-transparent py-1 px-1'
        }`}>
          {/* subtle shine overlay on scrolled */}
          {(isScrolled || showNavList) && (
            <div className="absolute inset-0 shine-overlay opacity-40 pointer-events-none" />
          )}

          <Link
            to='/'
            onClick={() => handleNavClick('/')}
            className='relative z-10 group flex items-center gap-2'
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white shadow-soft group-hover:animate-wiggle transition-transform">
              <span className="font-dancing font-bold text-xl md:text-2xl">E</span>
            </div>
            <span className='text-xl md:text-2xl font-extrabold font-space tracking-tight'>
              <span className="text-gradient-brand">Coach</span>
              <span className="text-gray-900">Emmy</span>
            </span>
          </Link>

          <div className='hidden md:flex items-center space-x-1 lg:space-x-2 relative z-10'>
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-300 ease-juicy group ${
                    active
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {/* Active / hover pill background */}
                  <span className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 shadow-inner-glow'
                      : 'bg-transparent group-hover:bg-primary/5'
                  }`} />

                  <span className="relative z-10 flex items-center gap-1">
                    {item.name}
                    {active && (
                      <span className="relative flex h-1.5 w-1.5 ml-0.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                      </span>
                    )}
                  </span>

                  {/* animated underline */}
                  <span className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand transition-all duration-300 ease-juicy ${
                    active ? 'w-6 opacity-100' : 'w-0 group-hover:w-4 opacity-0 group-hover:opacity-100'
                  }`} />
                </Link>
              )
            })}

            {/* Desktop CTA */}
            <a
              href="/#career-services"
              onClick={(e) => handleNavClick('/#career-services')}
              className="ml-3 lg:ml-5 btn btn--primary text-sm py-2 px-5 rounded-2xl"
            >
              Get Started ✨
            </a>
          </div>

          <button
            type='button'
            onClick={toggleNavList}
            className='md:hidden relative z-10 w-11 h-11 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-md border border-primary/10 text-gray-700 hover:text-primary hover:bg-white hover:border-primary/30 hover:scale-105 active:scale-95 transition-all duration-300 shadow-soft'
            aria-label='toggle navigation'
          >
            <div className={`transition-all duration-300 ${showNavList ? 'rotate-90 scale-110 text-primary' : ''}`}>
              {showNavList ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-juicy ${
            showNavList ? 'max-h-[520px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className='glass rounded-3xl p-4 shadow-juicy border border-white/60 relative overflow-hidden'>
            <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" />

            <div className='relative z-10 flex flex-col gap-2'>
              {navItems.map((item, index) => {
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative overflow-hidden rounded-2xl font-semibold transition-all duration-400 py-3 px-5 flex items-center justify-between group ${
                      active
                        ? 'bg-gradient-to-r from-primary/15 via-secondary/20 to-primary/10 text-primary shadow-inner-glow border border-primary/20'
                        : 'text-gray-700 hover:bg-white/70 hover:text-primary border border-transparent'
                    }`}
                    style={{ animation: showNavList ? `fadeUp 0.5s ease-juicy ${index * 80}ms both` : 'none' }}
                  >
                    <span>{item.name}</span>
                    <span className={`text-xl transition-transform duration-300 ${
                      active ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}>→</span>

                    {active && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                    )}
                  </Link>
                )
              })}

              <a
                href="/#career-services"
                onClick={() => setShowNavList(false)}
                className="mt-2 btn btn--primary text-center rounded-2xl shine-overlay animate-popIn"
                style={{ animationDelay: '0.35s' }}
              >
                🚀 Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
