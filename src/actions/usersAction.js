import axios from 'axios'

export const getUsers = () => {
    return async dispatch => {
        try {
            let users = await axios.get("http://localhost:8080/api/users");
            return dispatch({
                type: 'GET_USERS',
                payload: users.data
            });
        } catch (e) {
            console.log(e)
        }
    }
};
