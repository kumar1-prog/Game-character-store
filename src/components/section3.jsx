import Ironhook from "../assets/ironhook.png";
import Scarlettblade from "../assets/Scarlettblade.png";
import Nita from "../assets/Nita & Bruce.png";
import arrow from "../assets/arrow.png";
import hog from "../assets/hoghammer.png";
import charactersData from "../characters/characters.json";

function Section3({openModal}) {
  // Map images to character data
  const characters = {
    1: { ...charactersData[1], image: Ironhook },
    2: { ...charactersData[2], image: Scarlettblade },
    3: { ...charactersData[3], image: Nita },
    4: { ...charactersData[4], image: arrow },
    5: { ...charactersData[5], image: hog }
  };
 



    return ( 
        <>
        <section className="section3" id="section3">
            <div>
                <h2  className="navhead">
                   Choose Your Fighter
                </h2>
                <p className="details">
                5 legendary characters, each with unique powers
            </p>
            </div>
          
          <div className="card-row">

            
            <div className="character-card">
                <div className="card-body">
                    <img className="card-character"
                        src={Ironhook}
                        alt="Iron Hook"></img>
                    <div className="card-info">
                        <h3 className="card-name">Iron Hook</h3>
                        <p className="card-meta">Pixel Legends · <span className="card-type">Tank</span></p>
                       <button
                         className="btn-get"
                         onClick={()=>openModal({
                             ...characters[1]
                         })}
                              >
                             Get It →
                             </button>
                    </div>
                </div>
            </div>
            <div className="character-card">
                <div className="card-body2">
                    <img className="card-character"
                        src={Scarlettblade}
                        alt="Scarlett Blade"></img>
                    <div className="card-info">
                        <h3 className="card-name">Scarlett Blade</h3>
                        <p className="card-meta">Pixel Legends · <span className="card-type">Rogue</span></p>
                        <button
                         className="btn-get"
                         onClick={()=>openModal({
                             ...characters[2]
                         })}
                              >
                             Get It →
                             </button>
                    </div>
                </div>
            </div>
             <div className="character-card">
                <div className="card-body3">
                    <img className="card-character"
                        src={Nita}
                        alt="Nita & Bruce"></img>
                    <div className="card-info">
                        <h3 className="card-name">Nita & Bruce</h3>
                        <p className="card-meta">Pixel Legends · <span className="card-type">Brawler</span></p>
                        <button
                         className="btn-get"
                         onClick={()=>openModal({
                             ...characters[3]
                         })}
                              >
                             Get It →
                             </button>
                    </div>
                </div>
            </div>
        </div>
         <div className="card-row card-row-center">

           
            <div className="character-card">
                <div className="card-body4">
                    <img className="card-character"
                        src={arrow}
                        alt="Sylvan Arrow"></img>
                    <div className="card-info">
                        <h3 className="card-name">Sylvan Arrow</h3>
                        <p className="card-meta">Pixel Legends · <span className="card-type">Archer</span></p>
                        <button
                         className="btn-get"
                         onClick={()=>openModal({
                             ...characters[4]
                         })}
                              >
                             Get It →
                             </button>
                    </div>
                </div>
            </div>

           
            <div className="character-card">
                <div className="card-body5" >
                    <img className="card-character"
                        src={hog}
                        alt="Hog Hammer"></img>
                    <div className="card-info">
                        <h3 className="card-name">Hog Hammer</h3>
                        <p className="card-meta">Pixel Legends · <span className="card-type">Warrior</span></p>
                        <button
                         className="btn-get"
                         onClick={()=>openModal({
                             ...characters[5]
                         })}
                              >
                             Get It →
                                </button>
                    </div>
                </div>
            </div>
        </div>
        
        
    </section>
       
 </>
        
        
    );
}

export default Section3;