import React from 'react';
import { storiesOf } from '@storybook/react';

import TodoList from '../Components/Todo/TodoList';


storiesOf("Todo/TodoList", module)

    .add("TodoList", () => <TodoList />)



