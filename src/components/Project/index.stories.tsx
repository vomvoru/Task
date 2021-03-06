import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Project from './index';
import BrowserMock from '../BrowserMock';

const component = (
  <Project
    title="Project 01"
    taskBoxPropsList={[
      {
        key: '1',
        title: 'Todo',
        color: 'pink',
        tasks: [
          { title: 'About what to do 1', key: '1' },
          { title: 'About what to do 2', key: '2' },
          { title: 'About what to do 3', key: '3' },
          { title: 'About what to do 4', key: '4' },
          { title: 'About what to do 5', key: '5' },
          { title: 'About what to do 6', key: '6' },
          { title: 'About what to do 7', key: '7' },
          { title: 'About what to do 8', key: '8' },
        ],
      },
      {
        key: '2',
        title: 'Done',
        color: 'green',
        tasks: [
          { title: 'About what to done 1', key: '1' },
          { title: 'About what to done 2', key: '2' },
          { title: 'About what to done 3', key: '3' },
        ],
      },
      {
        key: '3',
        title: 'Done 3',
        color: 'black',
        tasks: [
          { title: 'About what to done 1', key: '1' },
          { title: 'About what to done 2', key: '2' },
          { title: 'About what to done 3', key: '3' },
        ],
      },
      {
        key: '4',
        title: 'Done 4',
        color: 'white',
        tasks: [
          { title: 'About what to done 1', key: '1' },
          { title: 'About what to done 2', key: '2' },
          { title: 'About what to done 3', key: '3' },
        ],
      },
      {
        key: '5',
        title: 'Done',
        color: 'red',
        tasks: [
          { title: 'About what to done 1', key: '1' },
          { title: 'About what to done 2', key: '2' },
          { title: 'About what to done 3', key: '3' },
        ],
      },
    ]}
    navItemPropsList={[
      {
        title: 'Home',
        key: '1',
      },
      {
        title: 'Dashboard',
        key: '2',
      },
      {
        title: 'My page',
        key: '3',
      },
      {
        title: 'Setting',
        key: '4',
      },
    ]}
  />
);

export default (name: string) =>
  storiesOf(name, module)
    .add('browser', () => <BrowserMock>{component}</BrowserMock>)
    .add('basic', () => component);
