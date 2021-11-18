export const NavLink: React.FC<{name: string}> = ({name}):JSX.Element => {
    return (
        <a className='underline-effect no-underline text-xs relative rounded-lg p-1 sm:p-2 sm:text-sm text-indigo-900 transition duration-600 font-extralight'>{name}</a>
    )
}