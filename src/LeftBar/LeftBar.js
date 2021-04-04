import BarMenu from './BarMenu.js';
import MyPlaylists from './MyPlaylists.js';
import logo from '../Logo.png';

const LeftBar=({filteredLists,onSearchChange})=> {
  return (
		<div id="leftBar" className="d-inline-flex text-white p-0 flex-column " style={{width:"15.5%",minWidth:"230px",height:"calc(100vh-90px)",backgroundColor:"#030303",overflowY:"scroll"}}>
            <img src={logo} alt="logo" className=" mr-5" style={{maxWidth:"100%",marginTop:"1.51rem",marginLeft:"1.55rem",minWidth:"50%",backgroundColor:"#030303",width:"56%"}} />
            <BarMenu/>

            <MyPlaylists userLists={filteredLists} searchChange={onSearchChange}/>
        </div>    
       
            
  );
}

export default LeftBar;
