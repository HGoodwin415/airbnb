import logo from "../images/airbnb-logo.png";
import "../App.css";

function Header() {
    return(
        <header>
            <img src={logo} alt="Airbnb logo" className="main-logo"/>
        </header>
    )
}

export default Header;