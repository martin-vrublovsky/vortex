import './About.css'
import SideBar from '../components/SideBar'

const About = () => {
    return (
        <div>
            <SideBar />

            <div className="subpage-wrapper">
                <h2>Main parts of the web app</h2>
                <ol>
                    <li>
                        <a href="#img-1">
                            1. Side nav bar
                        </a>
                    </li>

                    <li>
                        <a href="#img-2">
                            2. Table of applicants
                        </a>
                    </li>

                    <li>
                        <a href="#img-3">
                            3. Chart
                        </a>
                    </li>

                    <li>
                        <a href="#img-4">
                            4. Date filter
                        </a>
                    </li>
                </ol>
                <img src="../img/main_parts_of_the_web_app.png" alt="Main parts of the web app" className="img-1" />

                <div className="hr"></div>

                <h2 id="img-1">1. Side nav bar</h2>
                <p>
                    You can move between the <strong>Home</strong> and <strong>About</strong> subpages via the side nav bar.
                </p>
                <img src="../img/side_nav_bar.png" alt="Side nav bar" className="img-2" />

                <div className="hr"></div>

                <h2 id="img-2">2. Table of applicants</h2>
                <p>
                    In the table of applicants, you can view all applicants for TV extras.
                </p>
                <p>
                    With the <span style={{backgroundColor: "#ffc107"}}>yellow pen icon</span>, you can change information about each applicant.
                </p>
                <p>
                    You can remove a applicant from the table with <span style={{backgroundColor: "#dc3545"}}>the red trash icon</span>.
                </p>
                <img src="../img/table_of_applicants.png" alt="Table of applicants" className="img-3" />

                <div className="hr"></div>

                <h2 id="img-3">3. Chart</h2>
                <p>
                    In the chart you can see the number of applicants from each country.
                </p>
                <p>
                    To the left of the chart is a legend, which you can use to filter the countries that will be displayed in the chart.
                </p>
                <img src="../img/chart.png" alt="Chart" className="img-4" />

                <div className="hr"></div>

                <h2 id="img-4">4. Date filter</h2>
                <p>
                    Using the date filter, you can filter from the table only those applicants who fall within the date range you have chosen.
                </p>
                <img src="../img/date_filter.png" alt="Date filter" className="img-5" />

                <footer>
                    <p>© Copyright 2023</p>
                    <p>
                        <strong>Designed & developed by:</strong> Martin Vrublovský, Branislav Baranok, Adam Humeňanský & Simon Staško
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default About
