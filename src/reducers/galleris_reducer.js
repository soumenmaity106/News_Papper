export default function(state = {},action){
    switch(action.type){       
        case'GET_GALLERY':
        return{
            ...state,
            latestgallery:action.payload
        }
        case 'GET_SELETED_GALLERY':
        return{
            ...state,
            selected:action.payload
        }
        case 'CLEAR_SELETED_GALLERY':
        return{
            ...state,
            selected:action.payload
        }
        default:
            return state
    }
}