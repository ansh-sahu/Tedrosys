import React, { createContext, useContext, useReducer } from "react";
import UserReducer from "../Reducer/UserReducer";

const UserContext = createContext();
const initialState = {
    user: null
};

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
    // console.log(state);

    const handleLogin = async (value) => {
        try {
            dispatch({
                type: "login",
                payload: value,
            });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    const handleLogout = async (value) => {
        try {
            dispatch({
                type: "logout"
            });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };

    return (
        <UserContext.Provider value={{ ...state, handleLogin, handleLogout }}>
            {children}
        </UserContext.Provider>
    );
};
const useUserContext = () => {
    return useContext(UserContext);
};
export { UserProvider, UserContext, useUserContext };
