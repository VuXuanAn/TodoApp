import { todoConstants } from "./../action/constants";

const initialState = {
    status: '',
    todoList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case todoConstants.CREATE_TODO_REQUEST:
            state = {
                ...state,
                status: 'loading'
            }
            break;
        case todoConstants.CREATE_TODO_SUCCESS:
            state = {
                ...state,
                status: 'success',
                todoList: action.payload.todoList
            }
            break;
    }

    return state;
}