import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { initDB } from 'react-indexed-db';
import rootReducer from './store/reducers';
import AppProvider from './hooks';
import Routes from './routes';

const store = createStore(rootReducer);

initDB({
    name: 'MyDB',
    version: 1,
    objectStoresMeta: [
        {
            store: 'people',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'name', keypath: 'name', options: { unique: false } },
                { name: 'email', keypath: 'email', options: { unique: false } },
            ],
        },
    ],
});

function App() {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <BrowserRouter>
                    <AppProvider>
                        <Routes />
                    </AppProvider>
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    );
}

export default App;
