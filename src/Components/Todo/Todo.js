import React, { useState, useContext } from 'react';
import EditTodo from './EditTodo'
import TodosContext from '../../Context/todos';
import axios from 'axios';
import { Link } from 'react-router-dom'

function Todo(props) {
    const { item } = props

    const [edit, setEdit] = useState(false)
    const todosContext = useContext(TodosContext)

    const [loading, setLoading] = useState(false)


    let editHandler = text => {
        setLoading(true)
        axios.put(`/todos/${item.key}.json`, { done: item.done, text })
            .then(response => {
                todosContext.dispatch({ type: 'edit_todo', payload: { key: item.key, text } })
                setLoading(false)
            })
            .catch(err => console.log(err))



        setEdit(false);
    }

    let doneHandler = e => {
        setLoading(true)
        axios.put(`/todos/${item.key}.json`, { done: !item.done, text: item.text })
            .then(response => {
                todosContext.dispatch({ type: 'toggle_todo', payload: { key: item.key } })
                setLoading(false)
            })
            .catch(err => console.log(err))

    }

    let deleteHandler = e => {
        setLoading(true)
        // ajax 
        axios.delete(`/todos/${item.key}.json`)
            .then(response => {
                todosContext.dispatch({ type: 'delete_todo', payload: { key: item.key } })
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }
    ///////////////////////////////////////////////

    // let editHandler = text => {
    //     axios.put(`https://todo-reactjs-4c8c2-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${item.key}.json`, { done: item.done, text })
    //         .then(response => {

    //             todosContext.dispatch({
    //                 type: 'edit_todo',
    //                 payload: { key: item.key, text }
    //             })
    //             setEdit(false)
    //         })
    //         .catch(err => console.log(err))
    // }

    // let doneHandler = e => {
    //     axios.put(`https://todo-reactjs-4c8c2-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${item.key}.json`, { done: !item.done, text: item.text })
    //         .then(response => {

    //             todosContext.dispatch({
    //                 type: 'toggle_todo',
    //                 payload: { key: item.key, }
    //             })
    //             // setEdit(false)
    //         })
    //         .catch(err => console.log(err))
    // }

    // let deleteHandler = e => {
    //     axios.delete(`https://todo-reactjs-4c8c2-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${item.key}.json`)
    //         .then(response => {

    //             todosContext.dispatch({ type: 'delete_todo', payload: { key: item.key } })
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <>
            {
                loading
                    ? <div className="spinner-border text-info" role="status"></div>
                    : (

                        <>
                            {
                                edit
                                    ? <EditTodo text={item.text} edit={editHandler} />
                                    : (
                                        <div className='col-6 mb-2'>
                                            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                                                <div>
                                                    <Link to={`/todos/${item.key}`}>{item.text} </Link>
                                                </div>
                                                <div>
                                                    {
                                                        !item.done
                                                            ? <button type="button"
                                                                className="btn btn-success btn-sm me-1"
                                                                onClick={doneHandler}>
                                                                Done</button>
                                                            : <button type="button"
                                                                className="btn btn-warning btn-sm me-1"
                                                                onClick={doneHandler}>
                                                                Undone</button>
                                                    }
                                                    {/* <button type="button"
                                        className={`btn btn-sm me-1 ${!item.done ? 'btn-success' : 'btn-warning'}`}
                                        onClick={doneHandler}>{item.done ? 'undone' : 'done'}</button> */}
                                                    <button type="button"
                                                        className="btn btn-info btn-sm me-1"
                                                        onClick={() => setEdit(true)}>Edit</button>
                                                    <button type="button"
                                                        className="btn btn-danger btn-sm "
                                                        onClick={deleteHandler}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            }
                        </>
                    )
            }
        </>
    )
}

export default Todo;