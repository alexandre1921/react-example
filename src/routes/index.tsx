import VehicleRoutes from "./vehicle";
import StylesRoutes from "./styles";
import AuthRoutes from "./auth";
import { useAuth } from "../hooks/Auth";

function Routes() {
  const { user, isUserDataPresent } = useAuth();
  return (
    <>
        {isUserDataPresent && user ?
          <>
            <VehicleRoutes/>
            <StylesRoutes/>
          </>
          :
          <AuthRoutes/>
        }
    </>
  )
}

export default Routes
