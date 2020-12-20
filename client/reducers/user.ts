import { UserProps } from 'interfaces/props';
import { 
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    JOIN_REQUEST,
    JOIN_SUCCESS,
    JOIN_FAILURE
 } from 'constants/actions';

const initialState = {
    id: null,
    name: null,
    profileUrl: null,
    isLoggedIn: false,
    signUpSucces: false,
    signUpFail: false,
};

export const loginRequestAction = () => {
return ({
    type: LOG_IN_REQUEST,
  })};
  
export const logoutRequestAction = () => ({
    type: LOG_OUT_REQUEST,
});

export const joinRequestAction = (data) => ({
    type: JOIN_REQUEST,
    data
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        /* 회원가입 */
        case JOIN_REQUEST:
            return {
                ...state
            }
          case JOIN_SUCCESS:
            return {
                ...state,
                signUpSucces: true
            }
          case JOIN_FAILURE:
            return {
                ...state,
                signUpFail: true
            }
        /* 로그인 */
        case LOG_IN_REQUEST:
            return {
                ...state,
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
            }
        case LOG_IN_FAILURE:
            return {
                ...state,
            }
        /* 로그아웃 */
        case LOG_OUT_REQUEST:
            return {
                ...state
            }
        case LOG_OUT_SUCCESS:
            return {
                isLoggedIn: false,
                user: null
            }
        case LOG_OUT_FAILURE:
            return {
                ...state,
                logOutLoading: false,
                logOutError: action.error 
            }
        case LOAD_USER_REQUEST:
            return {
                ...state
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                id: action.data.id,
                name: action.data.name,
                profileUrl: action.data.imageUrl
            }
        default: 
            return state;
    }
};

export default reducer;
