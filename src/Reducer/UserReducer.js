const UserReducer = (state, action) => {
    switch (action.type) {
        case "login":
            if (!(localStorage.getItem('token') && localStorage.getItem('_id'))) {
                localStorage.setItem('token', action.payload.token)
                localStorage.setItem('_id', action.payload._id)
                return {
                    ...state,
                    user: action.payload.user,
                };
            } else {
                return {
                    ...state,
                    user: action.payload.user,
                };
            }
        case "logout":
            localStorage.removeItem('token')
            localStorage.removeItem('_id')
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default UserReducer;
