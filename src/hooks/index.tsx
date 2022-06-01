import { AuthProvider } from './Auth';
import { CounterProvider } from './Counter';

interface Props {
    children: React.ReactNode;
}

function AppProvider({ children }: Props) {
    return (
        <AuthProvider>
            <CounterProvider>{children}</CounterProvider>
        </AuthProvider>
    );
}

export default AppProvider;
