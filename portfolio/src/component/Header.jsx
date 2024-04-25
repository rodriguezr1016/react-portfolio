import {Link} from "react-router-dom"
function Header () {
    return(
        <header>
            <nav>
               <Link to={'/'}>Home</Link>
               <Link to={'/about'}>About</Link>
               <Link to={'/contact'}>Contact</Link>
               <Link to={'/works'}>Works</Link>
            </nav>
        </header>
    )
};

export default Header;