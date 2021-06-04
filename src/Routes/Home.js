import React, { useState, useEffect, useContext } from 'react';
import FormAddTodoHandle from '../Components/Todo/FormAddTodoHandle';
import TodoList from '../Components/Todo/TodoList';
import axios from 'axios'

import TodoContext from '../Context/todos'
function Home() {

    const [loading, setLoading] = useState();

    const todoContext = useContext(TodoContext);

    let jsonHandler = (data) => {
        setLoading(false)
        let todos = Object.entries(data).map(([key, value]) => {
            return {
                ...value,
                key
            }
        })
        todoContext.dispatch({ type: 'init_todo', payload: { todos } })
    }

    useEffect(() => {
        setLoading(true)
        axios.get(`/todos.json`)
            .then(response => console.log(jsonHandler(response.data)))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <section style={{
                backgroundColor: "#e9ecef", borderRadius: ".3rem",
                marginBottom: "2rem", padding: "2rem 1rem"
            }}>
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Welcome!</h1>
                    <p className="lead text-muted">To get started, add some tasks to your list:</p>
                    <FormAddTodoHandle />
                </div>
            </section>
            <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        {
                            loading
                                ? <div className="spinner-border text-info" role="status"></div>
                                : (
                                    <TodoList />
                                )
                        }
                    </div>

                </div>
            </div>
        </>
    )

}
export default Home;