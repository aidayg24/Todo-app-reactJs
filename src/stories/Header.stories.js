import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Header from '../Components/Layouts/Header';


storiesOf("Layout/Header", module)
    .addDecorator(StoryRouter())
    .add("Header", () => <Header />)

