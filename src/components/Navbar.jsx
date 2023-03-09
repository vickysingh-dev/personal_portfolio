import "./css/navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            about
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            works
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
