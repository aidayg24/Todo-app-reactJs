// import { addParameters, configure } from '@storybook/react';
// import crfTheme from './crfTheme'
// addParameters({
//   options: {
//     theme: crfTheme
//   }
// })

// function loadStories() {
//   require('../src/stories/index.stories');
// }

// configure(loadStories, module);
import { addParameters, configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import crfTheme from './crfTheme';
import 'bootstrap/dist/css/bootstrap.css'

import { withContextProvider } from 'storybook-addon-react-context';
import todosContext from '../src/Context/todos'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from '../src/Reducers/appReducer';

const store = createStore(appReducer);


addParameters({
  options: {
    theme: crfTheme
  }
})

addDecorator(S => (
  <Provider store={store}>
    <S />
  </Provider>
));

// addDecorator(withContextProvider({
//   provider: todosContext,
//   todos: [
//     {
//       key: 1,
//       text: 'todo one',
//       done: true
//     },
//     {
//       key: 2,
//       text: 'todo 2',
//       done: false
//     },
//   ]
// }))

addDecorator(withInfo({
  inline: true
}))



const req = require.context("../src/stories", true, /\.stories\.js/);
// const req = require.context("../src/stories", true, /\.stories\.js/);
function loadStories() {
  req.keys().forEach(filename => req(filename));

}

configure(loadStories, module);