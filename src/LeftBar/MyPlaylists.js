import filter from "./filter.png";
import AllPlaylists from './AllPlaylists.js';
const MyPlaylists=({userLists,searchChange})=> {
  
  
  return (

      <div className="mt-5 text-left">
          <p>Çalma listelerin</p>
                  
          <div className="position-relative">
            <input onChange={searchChange} type="text" placeholder="Ara" className="" style={{outline:"none",borderRadius:"18px",border:"0px",padding:"0.3rem",paddingLeft:"2.5rem",paddingRight:"2.5rem",backgroundColor:"#282828",width:"11rem"}}/>
            <img src={filter} alt="filter" className="position-absolute" style={{right:"1.5rem",top:"0.55rem"}}/>
          </div>

          <AllPlaylists userLists={userLists}/>
       </div>
         
             


  );
}

export default MyPlaylists;
