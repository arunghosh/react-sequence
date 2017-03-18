import React from 'react';
import ReactDOM from 'react-dom';
import SeqenceForm from '../src';
import Page1 from './Page1';
import Page2 from './Page2';

ReactDOM.render(
  <SeqenceForm>
    <Page1 key="page1" />
    <Page2 key="page2" />
  </SeqenceForm>,
  document.getElementById('app')
);

