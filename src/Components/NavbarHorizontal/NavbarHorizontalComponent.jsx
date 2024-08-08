import { Link, Outlet } from "react-router-dom";
import LogoComponent from "../Logo/LogoComponent";
import "./NavbarHorizontalComponent.css";

const NavbarHorizontalComponent = () => {
  return (
    <nav className="navbar-horizontal">
      <LogoComponent />
      <Link to="/">Accueil</Link>
      <Link to="/">Profil</Link>
      <Link to="/">Réglage</Link>
      <Link to="/">Communauté</Link>
      <Outlet />
    </nav>
  );
};

export default NavbarHorizontalComponent;
