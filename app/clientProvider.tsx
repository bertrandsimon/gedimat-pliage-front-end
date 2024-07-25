// REDUX AS CLIENT COMPONENT

'use client'; // This directive tells Next.js this is a Client Component

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import friends from './reducers/friends'
import user from './reducers/user'
import cart from './reducers/cart';

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({ friends, user, cart });
const persistConfig = { key: 'pliageAluminium', storage };




const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });
 
 const persistor = persistStore(store);


export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
