import {combineReducers} from 'redux';
import articles from './articales_reducer';
import gallery from './galleris_reducer'
const rootreducer = combineReducers({
    articles,
    gallery
})

export default rootreducer;