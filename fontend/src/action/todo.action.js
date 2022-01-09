import { todoConstants } from "./constants"
import axios from '../helpers/connect'

// get all todos
export const getAllTodo = () => {
    return async (dispatch) => {
        dispatch({
            type: todoConstants.CREATE_TODO_REQUEST
        })
        const res = await axios.get('/')

        if (res.status === 200) {
            const { todoList } = res.data
            await dispatch({
                type: todoConstants.CREATE_TODO_SUCCESS,
                payload: { todoList }
            })
        }
        if (res.status === 400) {
            dispatch({
                type: todoConstants.CREATE_TODO_FAIL,
                payload: { error: res.data.error }
            });
        }
    }
}
