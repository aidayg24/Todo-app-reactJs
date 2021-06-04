import React from 'react';
import { storiesOf } from '@storybook/react';

import FormAddTodo from '../Components/Todo/FormAddTodo';


storiesOf("Todo/FormAddTodo", module)
    .add("FormAddTodo manage", () => <FormAddTodo />)