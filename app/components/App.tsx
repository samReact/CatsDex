import React from 'react';
import {StyleSheet} from 'react-native';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import catsReducer from '../reducers/cats.reducer';
import AsyncStorage from '@react-native-community/async-storage';
import CatCard from './CatCard';
import CatsList from './CatsList';
import {Content, Container, Text} from 'native-base';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, catsReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const persistor = persistStore(store);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>
          <Content style={{flex: 1}} padder>
            <CatsList />
          </Content>
        </Container>
      </PersistGate>
    </Provider>
  );
};

export default App;
