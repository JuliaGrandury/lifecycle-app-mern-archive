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
            <div className='logo'>
                <Link to='/'>LifeCycle</Link>
            </div>
            <ul>
                {user ? (
                    <>
                        <li><NavLink>Closets</NavLink></li>
                        <li><NavLink>Outfits</NavLink></li>
                        <li><NavLink>Statistics</NavLink></li>
                        <li><button className='btn' onClick={onLogout}><FaSignOutAlt /> Logout</button></li>
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