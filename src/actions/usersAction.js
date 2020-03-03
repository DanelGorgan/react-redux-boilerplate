import axios from 'axios'

export const getUsers = () => async dispatch => {
    try {
        let {data} = await axios.get("http://localhost:8085/api/users");
        dispatch({
            type: 'GET_USERS',
            payload: data
        });
    } catch (e) {
        console.log(e)
    }
};
