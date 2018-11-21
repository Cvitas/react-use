import { call, put, take, select } from 'redux-saga/effects';
import types from '@/constants/action-types'

const pp = function () {
    return new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('执行完成');
            resolve(Math.random() * 100);
        }, 2000);
    });
}

export default function* setCount() {
    try {
        while (true) {
            console.log("setCount-saga")
            yield take(types.GO_COUNT,pp);
            const data = yield call(pp);
            yield put({type:types.GET_COUNT, data: data });
        }
    } catch (e) {

    }
}