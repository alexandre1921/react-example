import VehicleRoutes from './vehicle';
import StylesRoutes from './styles';
import AuthRoutes from './auth';
import { useAuth } from '../hooks/Auth';

function Routes() {
    const { user, isUserDataPresent } = useAuth();
    if (isUserDataPresent && user) {
        return (
            <>
                <VehicleRoutes />
                <StylesRoutes />
            </>
        );
    }

    return <AuthRoutes />;
}

export default Routes;
