
import video from "../assets/video1.webm"
import Navbar from "./nav";
function Hero() {
    return ( 
        <section className="hero" id="hero">
            
               <video className="hero-video" autoPlay muted loop playsInline>
                <source  src={video} type="video/webm" />
            </video>
            <div className="hero-overlay"></div>

         

            <div className="hero-content">
                <div className="hero-left">
                <p > THE ULTIMATE COLLECTION</p>
                <h1 className="hero-title">Collect<br />Legendary<br />Characters<br /></h1>
            </div>
            <div className="hero-right">
                <p className="hero-subtitle">Choose your warrior. Build your squad. Conquer the arena.</p>
                <a href="#section3" className="btn-cta" >Browse Characters ↓</a>
            </div>
        </div>
            
        </section>
          
     );
}

export default Hero;