import React from 'react';

const todosContext = React.createContext({
    todos: [],
    add: () => { },
    toggle: () => { },
    delete: () => { },
    edit: () => { }
})

export default todosContext;