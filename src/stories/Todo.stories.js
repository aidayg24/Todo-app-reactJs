import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Todo from '../Components/Todo/Todo';


storiesOf("Todo/Todo", module)
    .addDecorator(StoryRouter())
    .add("Todo that is not done", () => <Todo item={{ key: '1', text: 'Test Todo undon', done: false }} />)
    .add("Todo that is  done", () => <Todo item={{ key: '1', text: 'Test Todo done', done: true }} />)

