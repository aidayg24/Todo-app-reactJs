import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Todo(props) {
    const params = useParams()

    const [todo, setTodo] = useState({})

    const [loading, isLoading] = useState(false)


    useEffect(() => {

        isLoading(true)
        axios.get(`/todos/${params.todo}.json`)
            .then(response => {
                isLoading(false)
                if (response.data) {

                    setTodo(response.data)
                } else {
                    //redirect
                    props.history.push('/404')

                }

            })
            .catch(err => console.log(err))

    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Todo Dtail</h2>
                    {
                        loading
                            ? <div className="spinner-border text-info" role="status"></div>
                            : (
                                <>
                                    <p>{todo.text}</p>
                                    <span className={`badge ${todo.done ? 'bg-success' : 'bg-warning text-dark'} `}> {todo.done ? "Done" : "Undone"}</span>
                                </>

                            )

                    }
                </div>
            </div>
        </div>
    )
}

export default Todo;


