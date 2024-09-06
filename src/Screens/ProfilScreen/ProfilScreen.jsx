import { useEffect, useState } from "react";
import NavbarHorizontalComponent from "../../Components/NavbarHorizontal/NavbarHorizontalComponent";
import NavbarVertical from "../../Components/NavbarVertical/NavbarVertical";
import "./ProfilScreen.css";
import ActivityChart from "../../Components/ActivityChart/ActivityChartComponent";
import CaloriesChart from "../../Components/CalorieChart/CaloriesChartComponent";
import AverageSessionChartComponent from "../../Components/AverageSessionChart/AverageSessionChartComponent";
import CardComponent from "../../Components/CardComponent/CardComponent";
import apiService from "../../Services/ApiService";
import { useParams } from "react-router-dom";

const ProfilScreen = () => {
  const [userData, setUserData] = useState(null);
  const params = useParams();

  const userId = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiService.getUserData(userId);
      setUserData(data.data);
    };

    fetchData();
  }, [userId]);

  console.log(userData);

  if (!userData) {
    return <p>Aucun utilisateur trouvé pour l'ID {userId}</p>;
  }

  return (
    <>
      <div className="app-container">
        <NavbarHorizontalComponent />
        <div className="main-content">
          <NavbarVertical />
          <div className="wrapper">
            <div className="header-content">
              <h1>
                Bonjour,{" "}
                <span className="text-red">{userData.userInfos.firstName}</span>
              </h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="page-content">
              <div className="left-content">
                <ActivityChart userId={userId} />
                <AverageSessionChartComponent userId={userId} />
              </div>
              <div className="right-content">
                <CardComponent
                  iconPath="assets/icons/calories-icon.png"
                  data={userData.keyData.calorieCount}
                  unite={"kCal"}
                  type={"Calories"}
                />
                <CardComponent
                  iconPath="assets/icons/protein-icon.png"
                  data={userData.keyData.proteinCount}
                  unite={"g"}
                  type={"Protéines"}
                />
                <CardComponent
                  iconPath="assets/icons/carbs-icon.png"
                  data={userData.keyData.carbohydrateCount}
                  unite={"g"}
                  type={"Glucides"}
                />
                <CardComponent
                  iconPath="assets/icons/fat-icon.png"
                  data={userData.keyData.lipidCount}
                  unite={"g"}
                  type={"Lipides"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilScreen;
