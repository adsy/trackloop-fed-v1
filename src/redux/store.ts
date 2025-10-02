import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { AnyAction } from 'typescript-fsa';
import { AppReducer } from './reducer';

export type ReducerType = ReturnType<typeof AppReducer>;


const middleware = [];

middleware.push(createLogger());

const enhancers = [...middleware];

const persistConfig = {
  key: 'trackloop',
  storage,
  blacklist: [
    // add slices here to blacklist
  ]
};
const persistedReducer = persistReducer(persistConfig, AppReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(enhancers)
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = () => useDispatch<AppDispatch>();
