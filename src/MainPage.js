import ileri from './ileri.png';
import geri from './geri.png';
import './MainPage.css';
import cover from './coverpicture.png';
import PlayLists from './PlayLists.js';
import profile from './ProfilePic.png';
const MainPage=({recentlyPlayed,recommend})=> {

  return (

        <div className="bg-warning d-inline-block text-white  position-relative" style={{width:"84.5%", background: "linear-gradient(113.83deg, #121212 0.59%, #121212 99.74%)",overflowY:"scroll"}}> 
              
              <div  className="w-100 position-sticky" style={{height:"3.75rem",paddingLeft:"1rem",paddingRight:"1rem",background:"linear-gradient(113.83deg, #121212 0.59%, #121212 99.74%)",top:"0",zIndex:"999"}}>
                <div className="directory">
                  <img src={geri} alt="geri"/>
                </div>
                <div className="directory">
                  <img src={ileri} alt="ileri"/>
                </div>
                <div className="position-relative float-left" style={{marginTop:"0.9rem",marginLeft:"3rem"}}>
                  <input type="text" placeholder="Ara" className="" style={{outline:"none",borderRadius:"18px",border:"0px",padding:"0.3rem",paddingLeft:"2.5rem",paddingRight:"1.5rem",backgroundColor:"#282828",width:"15rem",height:"2rem"}}/>
                  
                </div>
                <div className="position-relative float-right" style={{marginTop:"0.9rem",marginRight:"3rem"}}>
                  <div style={{overflow: "hidden" ,textOverflow: "ellipsis",  whiteSpace: "nowrap",textAlign:"left",outline:"none",borderRadius:"18px",border:"0px",padding:"0.3rem",paddingLeft:"2.5rem",paddingRight:"1.5rem",backgroundColor:"#282828",width:"13rem",height:"2.3rem"}}><img src={profile} className="position-absolute" style={{left:"0.4rem",top:"0.4rem"}}/>Ali Barış Zengin Ve Profil Sahibi</div>
                </div>
              </div>


           
              <PlayLists recentlyPlayed={recentlyPlayed} recommend={recommend}/>

                

         
              
              
        </div>



  );
}

export default MainPage;
