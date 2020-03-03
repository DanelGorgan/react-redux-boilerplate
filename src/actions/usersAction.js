import axios from 'axios'

export const getUsers = () => async dispatch => {
    try {
        let {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        dispatch({
            type: 'GET_USERS',
            payload: data
        });
    } catch (e) {
        console.log(e)
    }
};
