import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faGlobe, faBars, faUser } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <header className='sticky top-0 z-50 p-5 md:px-10 grid grid-cols-3 bg-white shadow-md'>

        <div className='cursor-pointer'>
            <Image src="https://links.papareact.com/qd3" loading='lazy' alt='Logo' width={150} height={70} objectFit='contain'/>
        </div>

        <div className='flex items-center md:border-2 rounded-full md:shadow-sm py-2'>
            <input className='pl-4 bg-transparent outline-none flex-grow text-sm text-gray-400' type="text" placeholder='Start Your Search' />
            <FontAwesomeIcon icon={faSearch} height={40} width={40} className='hidden md:inline-flex text-center bg-red-400 text-white rounded-full p-3 cursor-pointer mx-2'/>
        </div>

        <div className='space-x-4 flex items-center justify-end text-gray-500'>
            <p className='hidden md:inline cursor-pointer'>Become a Host</p>
            <FontAwesomeIcon icon={faGlobe} className='h-6'/>
            <div className='flex border-2 rounded-full space-x-4 p-3 items-center'>
                <FontAwesomeIcon icon={faBars} className='h-6'/>
                <FontAwesomeIcon icon={faUser} className='h-6'/>

            </div>
        </div>
      
    </header>
  )
}

export default Header
