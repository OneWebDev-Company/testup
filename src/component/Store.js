import {createStore} from 'redux'
const reduce1=(state={x:0},action)=>{
if(action.type==="plus"){
    return {x:state.x + 1}
}else if(action.type === 'minus'){
    return {x:state - 1}
}else{
    return state
}
}


export const ahmedStore=createStore(reduce1);