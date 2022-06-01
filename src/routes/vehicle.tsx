import { Routes, Route } from 'react-router-dom';
import VehiclePage from '../pages/VehiclePage';

function VehicleRoutes() {
    return (
        <Routes>
            <Route path="/" element={<VehiclePage />} />
        </Routes>
    );
}

export default VehicleRoutes;
