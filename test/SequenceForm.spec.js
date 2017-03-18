import React from 'react';
import {shallow} from 'enzyme';
import SequenceForm from '../src/SequenceForm';

const Page1 = (props) => (
  <div>Page1
    <button onClick={props.gotoNext}>Next</button>
  </div>
);

const Page2 = () => (
  <div>Page2</div>
);

test('By default the first child will be displayed', () => {
  const sequenceForm = shallow(
    <SequenceForm>
      <Page1 />
      <Page2 />
    </SequenceForm>
  );

  expect(sequenceForm.text()).toEqual('<Page1 />');
});