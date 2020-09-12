import axios from "axios"

import { fbSignIn } from "../../config/env"
import { fbSignUp } from "../../config/env"
import {setTimeoutTimer,setLocalStorege} from "../../herpers/initAuth"
export const SIGNIN_USER_FULFILLED = "SIGNIN_USER_FULFILLED";
export const SIGNIN_USER_REJECTED = "SIGNIN_USER_REJECTED";
export const SIGNIN_USER_PENDING = "SIGNIN_USER_PENDING";

export const SIGNUP_USER_FULFILLED = "SIGNUP_USER_FULFILLED";
export const SIGNUP_USER_REJECTED = "SIGNUP_USER_REJECTED";
export const SIGNUP_USER_PENDING = "SIGNUP_USER_PENDING";



  
export function SignIn({ email, password }) {

    return dispatch => {
        dispatch({
            type: "SIGNIN_USER",
            payload: axios.post(fbSignIn,
                {
                    email,
                    password,
                    returnSecureToken: true
                }).then((response) => {
                 
                    setLocalStorege(response)
                    setTimeoutTimer(+response.data.expiresIn * 1000)                  
                    this.history.push("/")
                    return {
                        token: response.data.idToken,
                        expiresIn: response.data.expiresIn
                    }
                }).catch(error => {
                    return {
                        Error: error.message
                    }
                })
        })
    }
}

export function SignUp({ email, password }) {
    return dispatch => {
        dispatch({
            type: "SIGNUP_USER",
            payload: axios.post(fbSignUp,
                {
                    email,
                    password,
                    returnSecureToken: true
                }).then((response) => {                
                    this.history.push("/")
                    setLocalStorege(response)
                    return {
                        token: response.data.idToken,
                        expiresIn: response.data.expiresIn
                    }
                   
                }).catch(error => {
                    return {
                        Error: error.message
                    }
                })
        })
    }
   
}






