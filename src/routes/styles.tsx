import { Routes, Route } from 'react-router-dom';
import ChakraExample from '../pages/ChakraExample';

import StyledComponentsExample from '../pages/StyledComponentsExample';

function StylesRoutes() {
    return (
        <Routes>
            <Route path="/chakra" element={<ChakraExample />} />
            <Route path="/styled" element={<StyledComponentsExample />} />
        </Routes>
    );
}

export default StylesRoutes;
