import { DEFAULT_ACTION } from './constants';

export const initialState = {
    admin: {}
};

/* eslint-disable default-case, no-param-reassign */
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEFAULT_ACTION:
            return state;
        default:
            return state;
    }
};

export default adminReducer;
