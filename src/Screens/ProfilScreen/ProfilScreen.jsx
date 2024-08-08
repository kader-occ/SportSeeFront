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
            <h1>
              Bonjour, <span className="text-red">Thomas</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilScreen;
