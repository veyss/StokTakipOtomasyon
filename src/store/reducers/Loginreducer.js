import { SIGNIN_USER_FULFILLED, SIGNIN_USER_REJECTED, SIGNIN_USER_PENDING } from "../actions/LoginAction"
import { SIGNUP_USER_FULFILLED, SIGNUP_USER_REJECTED, SIGNUP_USER_PENDING } from "../actions/LoginAction"



const initialState = {
    expiresIn: "",
    token: "",
    fetching: false,
   Error:""

};
export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_USER_PENDING:
            return {
                ...state,
                fetching: true,
              
            };
        case SIGNIN_USER_FULFILLED:    
            
            return {
                ...state,
                token: action.payload.token,
                expiresIn: action.payload.expiresIn,
                fetching: false,
                Error:action.payload.Error
            };
        case SIGNIN_USER_REJECTED:
            
            return {
                ...state,
                token: action.payload.token,
                expiresIn: action.payload.expiresIn,
                fetching: true,
                Error:action.payload.Error
                
            };


        case SIGNUP_USER_PENDING:
            return {
                ...state,
                fetching: true

            };
        case SIGNUP_USER_FULFILLED:  
        console.log("full",action.payload)
            return {
                ...state,
                token: action.payload.token,
                expiresIn: action.payload.expiresIn,
                fetching: false,
                Error:action.payload.Error
                
            };
        case SIGNUP_USER_REJECTED:
            console.log("reje",action.payload)   
            return {
                ...state,
                token: action.payload.token,
                expiresIn: action.payload.expiresIn,
                fetching: true,
                Error:action.payload.Error  
            };


        default:
            return state;
    }

};
