import ChakraExample from "../pages/ChakraExample"

import StyledComponentsExample from "../pages/StyledComponentsExample"

import {
  Routes,
  Route,
} from "react-router-dom";
function StylesRoutes() {
  return (
    <Routes>
        <Route path="/chakra" element={<ChakraExample />} />
        <Route path="/styled" element={<StyledComponentsExample />}/>
    </Routes>
  )
}

export default StylesRoutes
