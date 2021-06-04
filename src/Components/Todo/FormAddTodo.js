
import React from 'react';
import TodosContext from '../../Context/todos';

import axios from 'axios'

class FormAddTodo extends React.Component {
    state = { text: '' }

    static contextType = TodosContext;

    formHandler(e) {
        e.preventDefault();
        //ajax
        if (this.state.text.length > 1) {
            let todo = { text: this.state.text, done: false }
            axios.post(`/todos.json`, todo)
                .then(response => this.context.dispatch({
                    type: 'add_todo',
                    payload: { todo: { ...todo, key: response.data.name } }
                }))
                .catch(err => console.log(err))
            // this.context.dispatch({
            //     type: 'add_todo',
            //     payload: { text: this.state.text }
            // });
            this.setState({ text: '' })
        }
    }

    inputHandler(e) {
        this.setState({
            text: e.target.value
        })
    }



    render() {
        return (

            <form className="row g-3" onSubmit={this.formHandler.bind(this)}>
                <div className="col-auto">
                    <input type="text" className="form-control "
                        placeholder="I want to do ..."
                        value={this.state.text}
                        onChange={this.inputHandler.bind(this)} />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Add</button>
                </div>

            </form>
        )
    }
}

export default FormAddTodo;