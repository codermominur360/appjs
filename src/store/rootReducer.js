import authReducer from './reducer/authReducer'
import projectReducer from './reducer/projectReducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer=combineReducers({
    auth:authReducer,
    project:projectReducer,
    firestore: firestoreReducer,
})

export default rootReducer