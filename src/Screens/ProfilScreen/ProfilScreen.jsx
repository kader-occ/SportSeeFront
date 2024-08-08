import { useEffect, useState } from "react";
import NavbarHorizontalComponent from "../../Components/NavbarHorizontal/NavbarHorizontalComponent";
import NavbarVertical from "../../Components/NavbarVertical/NavbarVertical";
import "./ProfilScreen.css";
import apiMockService from "../../Mocks/ApiMockService";
import ActivityChart from "../../Components/ActivityChart/ActivityChartComponent";
import CaloriesChart from "../../Components/CalorieChart/CaloriesChartComponent";

const ProfilScreen = () => {
  const [userData, setUserData] = useState(null);

  let userId = 12;

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiMockService.getUserData(userId);
      setUserData(data);
    };

    fetchData();
  }, [userId]);

  console.log(userData);

  if (!userData) return <div>Loading...</div>;
  return (
    <>
      <div className="app-container">
        <NavbarHorizontalComponent />
        <div className="main-content">
          <NavbarVertical />
          <div className="page-content">
            <h1>
              Bonjour,{" "}
              <span className="text-red">{userData.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <ActivityChart userId={userId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilScreen;
