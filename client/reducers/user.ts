import { UserProps } from 'interfaces/props';
import { 
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS
 } from 'constants/actions';

const initialState = {
    id: null,
    name: null,
    profileUrl: null,
    isLoggedIn: false,
};

export const loginRequestAction = () => {
return ({
    type: LOG_IN_REQUEST,
  })};
  
export const logoutRequestAction = () => ({
    type: LOG_OUT_REQUEST,
});

const dummyUser = {
    id: 9,
    name: "iznim1023"
}

const reducer = (state = initialState, action) => {
    console.log(action.data);
    switch (action.type) {
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
