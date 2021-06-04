function AppReducer(state, action) {
    switch (action.type) {
        case 'init_todo':
            let { todos } = action.payload
            return {
                ...state,
                todos
            }
        case 'add_todo':
            return addTodo(state, action);
            break;

        case 'delete_todo':
            return deleteTodo(state, action)
            break;

        case 'edit_todo':
            return editTodo(state, action)
            break;

        case 'toggle_todo':
            return toggleTodo(state, action)
            break;

        case 'login_user':
            return {
                ...state,
                authenticated: true,
            }
            break;

        case 'logout_user':
            return {
                ...state,
                authenticated: false,
            }
            break;

        default:
            return state
            break;
    }

}

export default AppReducer

let addTodo = (state, action) => {
    let { todo } = action.payload;

    return {
        ...state,
        todos: [
            ...state.todos,
            // { key: Date.now(), done: false, text }
            todo
        ]
    }
}

let deleteTodo = (state, action) => {
    let { key } = action.payload;

    return {
        ...state,
        todos: state.todos.filter(item => item.key !== key)
    }


}

let editTodo = (state, action) => {
    let { key, text } = action.payload;

    let item = state.todos.find(item => item.key === key);
    item.text = text;

    let newTodos = state.todos.filter(item => item.key !== key)

    return {
        ...state,
        todos: [
            ...newTodos,
            item
        ]
    }

}

// let toggleTodo = (state, action) => {
//     console.log('toggle')
//     let { key } = action.payload;

//     let item = state.todos.find(item => item.key === key);
//     item.done = !item.done;

//     let newTodos = state.todos.filter(item => item.key !== key);
//     return {
//         ...state,
//         todos: [
//             ...newTodos,
//             item
//         ]
//     }


// }
let toggleTodo = (state, action) => {
    let { key } = action.payload;
    console.log('toggle')
    let item = state.todos.find(item => item.key === key);
    item.done = !item.done;

    let newTodos = state.todos.filter(item => item.key !== key)

    return {
        ...state,
        todos: [
            ...newTodos,
            item
        ]
    }
}
