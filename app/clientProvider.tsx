// REDUX AS CLIENT COMPONENT

'use client'; // This directive tells Next.js this is a Client Component

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import friends from './reducers/friends'
import user from './reducers/user'

const store = configureStore({
  reducer: { friends, user },
 });


export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}