import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (
        <div className={'nav'}>
            <Link to="/">
                <div className={'logo'}>
                    <div className={"circle-1"}></div>
                    <div className={"circle-2"}></div>
                    <div className={"circle-3"}></div>
                </div>
            </Link>
            <ul className='nav-bar'>
                <li><Link to="/tangazo">Tangazo</Link></li>
                <li><Link to="/cloud">Cloud</Link></li>
                <li><Link to="/web">Web</Link></li>
                <li><Link to="/ai-ml">AI/ML</Link></li>
            </ul>
            <p><Link to="/dashboard">Dashboard</Link></p>
        </div>
    )
}
export default NavBar