/**
 * Created by cx on 2018/1/15.
 * Include
 * description
 */
import types from "@/constants/action-types";
const ACTIONS = {
    setCount:()=>{
        console.log("setCount-action")
        return {type:types.GO_COUNT}
    }
}

export default ACTIONS;