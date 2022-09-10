import { combineReducers } from 'redux'

import userReducer from './alluser/userReducer'
import postReducer from "./AllPosts/postReducer";

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer
})

export default rootReducer