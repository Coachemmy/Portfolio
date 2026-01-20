import './Footer.css'


const Footer = () => (
  <footer className='footer'>
    <div
  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <div>
      <h4 className='text-lg font-semibold mb-4 text-[#65a7b2]'>
        Resources
      </h4>
      <ul className='space-y-2 flex gap-2'>
        <li>
          <a href='https://github.com/coachemmy' className='hover:text-[#FFBE0B] transition-colors'>
            GitHub
          </a>
        </li>
        <li>
          <a href='https://linkedin.com/in/coachemmyb' className='hover:text-[#FFBE0B] transition-colors'>
            LinkedIn
          </a>
        </li>
        <li>
          <a href='#crypto' className='hover:text-[#FFBE0B] transition-colors'>
            Cryptocurrency Class
          </a>
        </li>
      </ul>
    </div>
    </div>

    <div className='lg:col-span-2'>
      <h3 className='text-xl font-bold mt-4 text-[#FFBE0B]'
      style={{ color: 'red', marginTop: '24px' }}>
        NO-TO-POVERTY
      </h3>
     
    </div>   
    <div className="text-center text-sm"
    style={{color: 'white'}}>
      © {new Date().getFullYear()} - All Rights Reserved <br/>Created By CoachEmmy
      <br className="sm:hidden" />
     
      <span className="mt-1 sm:mt-0 block sm:inline">
        {" "}
        Building innovative solutions since 2019
      </span>
    </div>
  </footer>
)

export default Footer
