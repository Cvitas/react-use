import { createStore, applyMiddleware, } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import reducers from '@/reducers'
import sagas from "@/sagas";

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['config']
};
const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
);
const perStore = persistStore(store);
sagaMiddleware.run(sagas);

export {
    store,
    perStore
}