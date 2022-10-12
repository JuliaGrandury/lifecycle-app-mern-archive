import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className='logo'><Link to='/'>LifeCycle</Link></div>
            <ul>
                {user ? (
                    <>
                        <li><NavLink to='/closets'>Closets</NavLink></li>
                        <li><NavLink to='/outfits'>Outfits</NavLink></li>
                        <li><NavLink to='/statistics'>Statistics</NavLink></li>
                        <li><NavLink to='/account'>Account</NavLink></li>
                        <li><button className='btn' onClick={onLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li><Link to='/login'><FaSignInAlt /> Login</Link></li>
                        <li><Link to='/register'><FaUser /> Register</Link></li>
                    </>
                )}
            </ul>
        </header>
    )
}

export default Header