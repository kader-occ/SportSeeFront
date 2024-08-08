import { Link, Outlet } from "react-router-dom";
import "./NavbarVertical.css";

const NavbarVertical = () => {
  return (
    <nav className="navbar-vertical">
      <Link to="/">
        <img src="assets/icons/yoga.svg" alt="SportSee yoga" />
      </Link>
      <Link to="/">
        <img src="assets/icons/natation.svg" alt="SportSee natation" />
      </Link>
      <Link to="/">
        <img src="assets/icons/velo.svg" alt="SportSee velo" />
      </Link>
      <Link to="/">
        <img src="assets/icons/musculation.svg" alt="SportSee musculation" />
      </Link>
      <p className="copyright">Copiryght, SportSee 2020</p>
      <Outlet />
    </nav>
  );
};

export default NavbarVertical;
