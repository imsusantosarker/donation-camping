import { Link } from 'react-router-dom'
import Logo from '../../../public/img/Logo.png'
import { CiMenuBurger } from "react-icons/ci";

export const Header = () => {

    const navLink = <>
        <li className='mx-2'><Link to="/">Home</Link></li>
        <li className='mx-2'><Link to="/donation">Donation</Link></li>
        <li className='mx-2'><Link to="/statistics">Statistics</Link></li>
    </>

    return (
        <div className="">
            <div className="max-w-6xl m-auto flex justify-between items-center">
                <div className="">
                    <img className='w-40 my-3' src={Logo} alt="" />
                </div>
                <div className="hidden md:flex ">
                    <ul className='flex'>
                        {navLink}
                    </ul>
                </div>
                <div className="dropdown dropdown-hover md:hidden">
                    <div tabIndex={0} role="button" className="btn m-1"><CiMenuBurger></CiMenuBurger></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 right-0">
                        {navLink}
                    </ul>
                </div>
            </div>
        </div>
    )
}
