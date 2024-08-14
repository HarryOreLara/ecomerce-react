import { Link, NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <header className="header" id="header">
                <nav className="nav container">
                    <Link to="/" className="nav__logo"> Shop. </Link>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink
                                    to="/"
                                    // className="nav__link active-link"
                                    className={({ isActive }) => `nav__link ${isActive ? 'active-link' : ''}`}
                                >
                                    <i
                                        className="ri-home-line"

                                    ></i>
                                    <span>Home</span>
                                </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink 
                                to="/new" 
                                className={({ isActive }) => `nav__link ${isActive ? 'active-link' : ''}`}
                                
                                >
                                    <i className="ri-price-tag-3-line"></i>
                                    <span>New</span>
                                </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink 
                                to="/collection" 
                                className={({ isActive }) => `nav__link ${isActive ? 'active-link' : ''}`}
                                
                                >
                                    <i className="ri-compass-line"></i>
                                    <span>Collection</span>
                                </NavLink>
                            </li>

                            <li className="nav__item">
                                <NavLink 
                                to="/products" 
                                className={({ isActive }) => `nav__link ${isActive ? 'active-link' : ''}`}
                                
                                >
                                    <i className="ri-t-shirt-line"></i>
                                    <span>Products</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <i className="ri-moon-line change-theme" id="theme-button"></i>
                </nav>
            </header>
        </>
    )
}
