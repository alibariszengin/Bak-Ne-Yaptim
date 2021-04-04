


const PlayListCover=({name,description,image})=> {
  return (



      <div id="ListCover" className=" d-inline-block mt-4 mr-4" style={{width:"17.9%",overflow:"hidden",height:"18rem",borderRadius:"10px",background:"rgba(255,255,255,0.08)",padding:"1.2rem",boxSizing:""}} >
        <div >
          <img src={image} alt="Playlist Pic" className="w-100" style={{height:"auto",filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.6))"}}/>
   
        </div>
        <div style={{paddingLeft:"0.5rem",paddingRight:"0.5rem",marginTop:"0.8rem"}}>
          <h6>{name}</h6>
          <div style={{fontSize:"0.8rem",  overflow: "hidden" ,textOverflow: "ellipsis",  whiteSpace: "nowrap" }}>{description}</div>
        </div>
      </div>

        

  );
}

export default PlayListCover;
