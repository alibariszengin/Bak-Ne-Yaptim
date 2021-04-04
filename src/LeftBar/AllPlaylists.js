import UserList from './UserList';
import './LeftBar.css';
const AllPlaylists=({userLists})=> {
  
  const listsComp=userLists.map((user,i)=>{
    
    return <UserList key={i} name={userLists[i].name}/>
      
    
  })
  return (

      <ul id="listOfSongs">
        
        {listsComp}  
        
      </ul>
         
             


  );
}

export default AllPlaylists;
