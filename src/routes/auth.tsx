import {
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
function VehicleRoutes() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />}/>
    </Routes>
  )
}

export default VehicleRoutes
