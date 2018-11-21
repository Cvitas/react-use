import {combineReducers} from "redux";
import {config} from "./reducers";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const configPersistConfig = {
    key: 'config',
    storage: storage,
    whitelist: ['count']
}

const reducer = combineReducers({
    config:  persistReducer(configPersistConfig, config),
});

export default reducer;