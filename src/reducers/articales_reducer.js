export default function(state = {},action){
    switch(action.type){
        case'GET_LATEXT':
        return{
            ...state,
            latest:action.payload
        }
        case'GET_OTHER':
        return{
            ...state,
            other:action.payload
        }
     
        default:
            return state
    }
}