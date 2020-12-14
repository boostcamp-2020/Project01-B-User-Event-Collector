import { UserProps } from 'interfaces/props';
import { 
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    LOAD_USER_REQUEST
 } from 'constants/actions';

const initialState = {
    user: null,
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
    id: "minji1023",
    name: "Minji"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        /* 로그인 */
        case LOG_IN_REQUEST:
            console.log('reducer');
            return {
                ...state,
            }
        case LOG_IN_SUCCESS:
            alert('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
            return {
                isLoggedIn: true,
                user: dummyUser
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
                isLoggedIn: true,
                user: action.data
            }
        default: 
            return state;
    }
};

export default reducer;
