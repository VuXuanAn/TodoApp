import { todoContants } from "./../actions/constant";

const initialState = {
    status: '',
    todoList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case todoContants.CREATE_TODO_REQUEST:
            state = {
                ...state,
                status: 'loading'
            }
            break;
        case todoContants.CREATE_TODO_SUCCESS:
            state = {
                ...state,
                status: 'success',
                todoList: action.payload.todoList
            }
            break;
    }

    return state;
}