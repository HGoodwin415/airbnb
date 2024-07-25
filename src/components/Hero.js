import collage from "../images/photo-grid.png";
import "../App.css";

function Hero() {
    return(
        <>
        <div className="hero-image"> 
        <img src={collage} alt="collage"/>
        </div>
        <div>
            <h1>Online Experiences</h1>
            <h3>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</h3>
        </div>
        </>
    )
}

export default Hero;