import { Link } from 'react-router-dom'
import Logo from '../../../public/img/Logo.png'

export const Header = () => {
    return (
        <div className="">
            <div className="max-w-6xl m-auto flex justify-between items-center">
                <div className="">
                    <img className='w-40 my-3' src={Logo} alt="" />
                </div>
                <div className="">
                    <ul className='flex'>
                        <li className='mx-2'><Link to="/">Home</Link></li>
                        <li className='mx-2'><Link to="/donation">Donation</Link></li>
                        <li className='mx-2'><Link to="/statistics">Statistics</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
