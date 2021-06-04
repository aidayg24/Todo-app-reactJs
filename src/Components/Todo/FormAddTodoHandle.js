
import React from 'react';

import AuthContext from '../../Context/auth';

import FormAddTodo from './FormAddTodo';

class FormAddTodoHandle extends React.Component {

    render() {
        return (

            <AuthContext.Consumer>
                {
                    context => (
                        <>
                            {
                                context.authenticated
                                    ? (
                                        <FormAddTodo />
                                    )
                                    : <p>You should login first!</p>
                            }
                        </>
                    )
                }
            </AuthContext.Consumer>
        )
    }
}

export default FormAddTodoHandle;