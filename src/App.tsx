import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes';
import {
  BrowserRouter,
} from "react-router-dom";
import AppProvider from './hooks';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { createStore } from 'redux';
import { initDB } from 'react-indexed-db';

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
        { name: 'email', keypath: 'email', options: { unique: false } }
      ]
    }
  ]
});

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
            <AppProvider>
              <Routes></Routes>
            </AppProvider>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  )
}

export default App
