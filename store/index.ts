import {combineReducers, createStore} from 'redux'
import userReducer from './reducers/user';
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    user:userReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>
export default store;