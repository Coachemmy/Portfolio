import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='fixed bottom-8 right-8 z-40'>
      <a 
        href='#top' 
        aria-label='top'
        className='bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110'
      >
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </div>
  ) : null
}

export default ScrollToTop
