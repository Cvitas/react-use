/**
 * Created by cx on 2018/1/15.
 * Include
 * description
 */
import types from '@/constants/action-types'

export default function config(state = {
    count:0,
    _count:0,
},action){
    switch(action.type){
        case types.GET_COUNT:
            return Object.assign({}, state, {
                count:action.data,
                _count:action.data,
            });
        default:
            return state;
    }
}


