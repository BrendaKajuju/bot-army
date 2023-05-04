import { Navlink } from "react-router-dom";
import NavbarLink from "@nextui-org/react/types/navbar/navbar-link"


//Provide option to either view the Whole Army Selection or Your personal army
const Nav = () => {
return(
    <div className="nav">
        <Navlink to="/">Whole Globutron Force </Navlink>
        <Navlink to="/army">Add to your Force </Navlink>
    </div>
);
};
export default Nav;