import PlayListCover from './PlayListsCover.js'
const PlayList=({recentlyPlayed,recommend})=> {
  const recentlyLists=recentlyPlayed.map((user,i)=>{
    
    return <PlayListCover key={i} name={recentlyPlayed[i].name} description={recentlyPlayed[i].description} image={recentlyPlayed[i].images[0].url}/>
      
    
  })
  const recomLists=recommend.map((user,i)=>{
    
    return <PlayListCover key={i} name={recommend[i].name} description={recommend[i].description} image={recommend[i].images[0].url}/>
      
    
  })
  return (


      <div>
        <div className="text-left" style={{padding:"2rem"}}>
          <h2 style={{fontSize:"1.7rem"}}>Yakında Çalanlar  </h2>


           
          <div>
            {recentlyLists}
          </div>
        </div>
          

           
          
        <div className="text-left" style={{padding:"2rem"}}>
          <h2 style={{fontSize:"1.7rem"}}>Tavsiye Edilenler  </h2>
          <p style={{color:"#FFFFFF",opacity:"0.6"}}>Sevdiğin her şeyden biraz dinle</p>
           
          <div>
            {recomLists}
          </div>
                

        </div>
      </div>



  );
}

export default PlayList;