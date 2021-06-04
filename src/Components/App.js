// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
// import Header from './Layouts/Header';
// import FormAddTodo from './Todo/FormAddTodo';
// import TodoList from './Todo/TodoList';

// import TodosContext from '../Context/todos';
// import AuthContext from '../Context/auth';


// class App extends Component {
//     state = {
//         todos: [],
//         authenticated: false,
//     }
//     addTodo(text) {
//         this.setState(prevState => {
//             return {
//                 todos: [
//                     ...prevState.todos,
//                     { key: Date.now(), done: false, text }
//                 ],
//             }
//         })
//     }

//     deleteTodo(key) {
//         this.setState(prevState => {
//             return {
//                 todos: prevState.todos.filter(item => item.key !== key)
//             }
//         })
//     }

//     editTodo(key, text) {
//         let { todos } = this.state
//         let item = todos.find(item => item.key === key);
//         item.text = text;

//         let newTodos = todos.filter(item => item.key !== key)
//         this.setState({
//             todos: [
//                 ...newTodos,
//                 item
//             ]
//         })

//     }

//     toggleTodo(key) {
//         let { todos } = this.state
//         let item = todos.find(item => item.key === key);
//         item.done = !item.done;

//         let newTodos = todos.filter(item => item.key !== key)
//         this.setState({
//             todos: [
//                 ...newTodos,
//                 item
//             ]
//         })
//     }

//     render() {
//         return (
//             <AuthContext.Provider value={{
//                 authenticated: this.state.authenticated,
//                 login: () => { this.setState({ authenticated: true }) },
//                 logout: () => { this.setState({ authenticated: false }) }
//             }}>
//                 <TodosContext.Provider value={{
//                     todos: this.state.todos,
//                     add: this.addTodo.bind(this),
//                     toggle: this.toggleTodo.bind(this),
//                     delete: this.deleteTodo.bind(this),
//                     edit: this.editTodo.bind(this)

//                 }}>
//                     <div className="App">
//                         <Header />
//                         <main>
//                             <section style={{
//                                 backgroundColor: "#e9ecef", borderRadius: ".3rem",
//                                 marginBottom: "2rem", padding: "2rem 1rem"
//                             }}>
//                                 <div className="container d-flex flex-column align-items-center">
//                                     <h1 className="jumbotron-heading">Welcome!</h1>
//                                     <p className="lead text-muted">To get started, add some tasks to your list:</p>
//                                     <FormAddTodo />
//                                 </div>
//                             </section>
//                             <div className="todosList">
//                                 <div className="container">
//                                     <div className="d-flex flex-column align-items-center ">
//                                         <TodoList />
//                                     </div>

//                                 </div>
//                             </div>
//                         </main>
//                     </div>
//                 </TodosContext.Provider>

//             </AuthContext.Provider>


//         )
//     }
// }

// export default App;

import React, { useReducer } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'
import Header from './Layouts/Header';


import TodosContext from '../Context/todos';
import AuthContext from '../Context/auth';

import AppReducer from '../Reducers/appReducer';


import Home from '../Routes/Home';
import About from '../Routes/About';
import Contact from '../Routes/Contact';
import Todo from '../Routes/Todo';
import NotFound from '../Routes/NotFound';

// import AsyncComponent from '../AsyncComponent'
// const Home = AsyncComponent(() => import('../Routes/Home').then(module => module.default))
// const About = AsyncComponent(() => import('../Routes/About').then(module => module.default))
// const Contact = AsyncComponent(() => import('../Routes/Contact').then(module => module.default))
// const Todo = AsyncComponent(() => import('../Routes/Todo').then(module => module.default))
// const NotFound = AsyncComponent(() => import('../Routes/NotFound').then(module => module.default))

//npm install @loadable/component
// import loadable from '@loadable/component';
// const Home = loadable(() => import('../Routes/Home'))
// const About = loadable(() => import('../Routes/About'))
// const Todo = loadable(() => import('../Routes/Todo'))
// const Contact = loadable(() => import('../Routes/Contact'))
// const NotFound = loadable(() => import('../Routes/NotFound'))

function App() {
    const [state, dispatch] = useReducer(AppReducer, {
        todos: [],
        authenticated: false
    })


    return (
        <Router>

            <AuthContext.Provider value={{
                authenticated: state.authenticated,
                dispatch
            }}>
                <TodosContext.Provider value={{
                    todos: state.todos,
                    dispatch

                }}>
                    <div className="App">
                        <Header />
                        <main>
                            <Switch>

                                <Route path="/" component={Home} exact />
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/todos/:todo" component={Todo} />
                                <Route path="/404" component={NotFound} />
                                <Route path="" component={NotFound} />
                            </Switch>


                        </main>
                    </div>
                </TodosContext.Provider>

            </AuthContext.Provider>
        </Router>


    )
}


export default App;