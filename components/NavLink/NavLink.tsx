export const NavLink: React.FC<{name: string}> = ({name}):JSX.Element => {
    return (
        <a className='transform hover:translate-x-1 hover:translate-y-1 rounded-lg p-2 text-sm text-indigo-900 transition duration-600 font-extralight'>{name}</a>
    )
}