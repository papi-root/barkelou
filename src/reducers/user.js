import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL 
} from '../actions/types' 

export default function userSignin(state = {}, action) {

    const { type, payload } = action

    switch(type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: payload } 
        case USER_REGISTER_FAIL: 
            return { loading: false, error: payload }
        default: 
            return state; 
    }
}

