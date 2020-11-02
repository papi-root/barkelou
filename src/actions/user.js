import axios from 'axios'

import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from './types'

export const register = (nom, prenom, email, password) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { nom, prenom, email, password }}) 
    try{
        const {data} = await axios.post('/api/users/register', {nom, prenom, email, password})
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data }) 
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
    }
}