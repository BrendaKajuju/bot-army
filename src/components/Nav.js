import { NavLink } from "react-router-dom";

//Provide option to either view the Whole Army Selection or Your personal army
const Nav = () => {
return(
    <div className="nav">
        <NavLink to="/">Whole Globutron Force </NavLink>
        <NavLink to="/army">Add to your Force </NavLink>
    </div>
);
};
export default Nav;