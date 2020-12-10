export interface User {
    id: number;
    name: string;
}

const initialState = {
    id: 1,
    name: 'TEST',
};

const reducer = (state: User = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;
