import "./css/nav.css";

export default function Nav() {
    return (
        <div className="nav">
            <ul className="mini-nav-list">
                <li className="mini-nav-item">
                    <a href="#" className="mini-nav-link">
                        About
                    </a>
                </li>
                <li className="mini-nav-item">
                    <a href="#" className="mini-nav-link">
                        Languages
                    </a>
                </li>
                <li className="mini-nav-item">
                    <a href="#" className="mini-nav-link">
                        Technologies/Frameworks
                    </a>
                </li>
            </ul>
        </div>
    );
}
