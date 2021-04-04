const MenuItems=({text, name, img}) => {

	function linkClicked(event) {
		const elements=document.getElementsByName(name);
		const all = document.getElementsByClassName("MenuItem");

		console.log(all);
		all[0].style.visibility ="hidden";
		all[1].style.visibility ="hidden";
		all[2].style.visibility ="hidden";

		
		console.log(elements[0]);
		elements[0].style.visibility ="visible";
		
	}

    return (
    
        <li  className="position-relative">
          <div  name={name} style={{width:"0.3rem",left:"-1.575rem",top:"0.1rem",content:" ",height:"2.5rem",background:"#66D36E",visibility:"hidden"}} className="MenuItem d-inline position-absolute"></div>
          <a  href="/#" onClick={linkClicked} className="menuLinks text-decoration-none text-white w-100" style={{opacity:"0.5"}}><img src={img} alt="Menu Item" className="mr-3" />{text}</a>
        </li>

    );
}

export default MenuItems;
