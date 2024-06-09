import './Home.css'
import SideBar from '../components/SideBar'
import TableOfUsers from '../components/TableOfUsers'

const Home = () => {
    return (
        <div>
            <SideBar />

            <div className="container">
                <TableOfUsers />
            </div>
        </div>
    )
}

export default Home
