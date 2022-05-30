import VehiclePage from "../pages/VehiclePage"

import {
  Routes,
  Route,
} from "react-router-dom";
function VehicleRoutes() {
  return (
    <Routes>
        <Route path="/" element={<VehiclePage />}/>
    </Routes>
  )
}

export default VehicleRoutes
