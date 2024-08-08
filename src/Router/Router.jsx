import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilScreen from "../Screens/ProfilScreen/ProfilScreen";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<ProfilScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
