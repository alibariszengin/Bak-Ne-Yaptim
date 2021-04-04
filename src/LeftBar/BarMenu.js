
import home from './HomeGiris.png';
import search from '../img/search.png';
import books from './books.png';

import MenuItems from './MenuItems.js';

function BarMenu() {
  return (
    
       
            <ul id="barMenu" style={{listStyle:"none",padding:"0rem",textAlign:"left"}} className=" mt-4">
              <MenuItems name="home" img={home} text="Giris"/>
              <MenuItems name="search" img={search} text="Gözat"/>
              <MenuItems name="books" img={books} text="Kitaplık"/>
            </ul>   
     
  );
}

export default BarMenu;
