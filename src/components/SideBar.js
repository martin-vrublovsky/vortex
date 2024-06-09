import './SideBar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false)

    const ToggleSidebar = () => { sideBarIsOpen === true ? setSideBarIsOpen(false) : setSideBarIsOpen(true) }

    return (
        <nav className={sideBarIsOpen === true ? 'active' : ''}>
            <ul>
                <li>
                    <Link>
                        <i className="bi bi-list" onClick={ToggleSidebar}></i>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <i className="bi bi-house-fill"></i>
                        <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/about">
                        <i className="bi bi-question-circle-fill"></i>
                        <span>About</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar
