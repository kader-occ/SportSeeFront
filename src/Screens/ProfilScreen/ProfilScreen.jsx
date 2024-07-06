import NavbarHorizontalComponent from "../../Components/NavbarHorizontal/NavbarHorizontalComponent";
import NavbarVertical from "../../Components/NavbarVertical/NavbarVertical";
import "./ProfilScreen.css";

const ProfilScreen = () => {
  return (
    <>
      <div className="app-container">
        <NavbarHorizontalComponent />
        <div className="main-content">
          <NavbarVertical />
          <div className="page-content">
            <h1>Profil</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilScreen;
