import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const HeroSection: React.FC = ():JSX.Element => {
    return (
        <div className='m-0 pt-16 gap-10 p-2 flex flex-col w-full bg-gray-100 h-3/4 items-center'>
            <div className='p-2 m-2 flex sm:flex-row flex-col items-center h-full gap-10'>
                <div className='filter md:blur-none blur-sm overflow-hidden md:w-1/2 w-full'>
                    <img className='object-cover' alt='profile' src='https://th.bing.com/th/id/R.80d2b2cee313c9c2c66a70da327b9e5d?rik=HHdL9sopPpNZDw&riu=http%3a%2f%2flucknowgraphics.com%2fwp-content%2fuploads%2f2020%2f09%2fweb-development-in-Lucknow-994x1024.png&ehk=7vx%2bx7fEVxBSXUxXEvtKuUWWxhH5ZiwtGLdmFkuADr8%3d&risl=&pid=ImgRaw&r=0'></img>
                </div>
                <div className='md:w-1/2 w-full md:relative absolute'>
                    <div className="animated-title">
                        <div className="text-top">
                            <div>
                                <span>web</span>
                                <span>developer</span>
                            </div>
                        </div>
                        <div className="text-bottom">
                            <div>nair palacios</div>
                        </div>
                    </div>
                </div>    
            </div>
            <button className='text-4xl text-indigo-900 animate-bounce'><FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></button>
        </div>
    )
}