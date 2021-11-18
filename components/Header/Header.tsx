import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "../NavLink/NavLink"

export const Header: React.FC = ():JSX.Element => {
    return (
        <div className='w-screen m-0 p-8 flex flex-row bg-gray-100 justify-between items-center'>
            <div className='flex flex-row items-center justify-center  font-sans cursor-pointer'>
                <div className='transform hover:translate-x-1 hover:translate-y-1 text-indigo-900 transition duration-600'>
                    <a className='rounded-lg p-2 cursor-pointer text-xl p-2 lowercase'>Nair Palacios </a>
                </div>
                <NavLink name='About'/>
                <NavLink name='Projects'/>
                <NavLink name='Contact'/>
            </div>
            <div className='cursor-pointer flex flex-row'>
                <div className='transform hover:translate-x-1 hover:translate-y-1 transition duration-600 text-2xl text-indigo-900 p-2'> 
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className='transform hover:translate-x-1 hover:translate-y-1 transition duration-600 text-2xl text-indigo-900 p-2'> 
                    <FontAwesomeIcon icon={faGithub} />
                </div>    
            </div>
        </div>
    )
}