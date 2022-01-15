import { login, logout } from '../services/firebase'; // NAMED IMPORT from a module
import { Link } from 'react-router-dom';

//fragment in line 14 because condition contains multiple elements
//Consider giving compoonent HTML classnames for CSS styling
//you can style sign-in buttons to look like regular text

function Header (props) {
    return (
        <nav>
            <Link to="/cheeses">
                <div>Cheese App</div>
            </Link>
            {
                props.user ?
                <>
                <img style={{
                    height: '3.125 rem',
                    width: '3.125 rem',
                    borderRadius: '50%'
                }}
                src={props.user.photoURL} alt={props.user.displayName} />
                <button onClick={logout}>Logout</button>
                </>
                :
                <button onClick={login}>Login</button>
            }
        </nav>
    )
}

// can't use anchor tags or links for your login/logout

export default Header;