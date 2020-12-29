import {combineReducers, createStore} from 'redux'
import userReducer from './reducers/user';
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const rootReducer = combineReducers({
    user:userReducer
})

const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
