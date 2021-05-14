const Nav = () => {
    return <nav className="nav-menu">
    <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./about-us.html">About Us</a></li>
        <li><a href="./class-details.html">Classes</a></li>
        <li><a href="./services.html">Services</a></li>
        <li><a href="./team.html">Our Team</a></li>
        <li><a href="#">Pages</a>
            <ul class="dropdown">
                <li><a href="./about-us.html">About us</a></li>
                <li><a href="./class-timetable.html">Classes timetable</a></li>
                <li><a href="./bmi-calculator.html">Bmi calculate</a></li>
                <li><a href="./team.html">Our team</a></li>
                <li><a href="./gallery.html">Gallery</a></li>
                <li><a href="./blog.html">Our blog</a></li>
                <li><a href="./404.html">404</a></li>
            </ul>
        </li>
        <li><a href="./contact.html">Contact</a></li>
    </ul>
</nav>
};

export default Nav;