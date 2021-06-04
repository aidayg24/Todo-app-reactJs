import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import EditTodo from '../Components/Todo/EditTodo';


storiesOf("Todo/EditTodo", module)
    .addDecorator(StoryRouter())
    .add("EditTodo manage", () => <EditTodo text='test' />)