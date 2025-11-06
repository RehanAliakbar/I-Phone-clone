import {appleImg, bagImg, searchImg} from '../utils';
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className='w-full flex justify-between items-center px-5 py-5 sm:px-10'>
        <nav className='w-full flex screen-max-width' >
            
            <img src={appleImg} alt="Apple" width={14} height={18} />
            <div className='flex flex-1 justify-center max-sm:hidden '>
                {navLists.map((l,index)=>(
                    <span  key={index} className='px-5 text-sm text-gray cursor-pointer hover:text-white transition-all' >{l}</span>
                ))}
            </div>

            <div className='flex align-baseline gap-7  max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt="search" width={18} height={18}  />
                <img src={bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}
export default Navbar