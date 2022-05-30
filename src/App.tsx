import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes';
import {
  BrowserRouter,
} from "react-router-dom";
import AppProvider from './hooks';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { createStore } from 'redux';


const store = createStore(rootReducer)

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
