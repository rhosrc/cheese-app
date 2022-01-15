import { Link } from 'react-router-dom';

function Header () {
    return (
        <nav>
            <Link to="/cheeses">
                <div>Cheese App</div>
            </Link>
        </nav>
    )
}

export default Header;