import React from 'react';
import {shallow, mount} from 'enzyme';
import SequenceForm from '../src/SequenceForm';

const Page1 = (props) => (
  <div>Page1
    <button onClick={props.gotoNext}></button>
  </div>
);

const Page2 = () => (
  <div>Page2</div>
);

const NavByKeyPage = (props) => (
  <div>NavByKeyPage
    <button onClick={() => props.gotoKey('page2')}></button>
  </div>
);

describe('SequenceForm Component', () => {

  test('By default the first child will be displayed', () => {
    const sequenceForm = shallow(
      <SequenceForm>
        <Page1/>
        <Page2/>
      </SequenceForm>
    );
    expect(sequenceForm.text()).toEqual('<Page1 />');
  });

  test('gotoKey should navigate to the component by key', () => {
    const sequenceForm = mount(
      <SequenceForm>
        <NavByKeyPage />
        <Page1 key="page1" />
        <Page2 key="page2" />
      </SequenceForm>
    );
    expect(sequenceForm.text()).toEqual('NavByKeyPage');
    sequenceForm
      .find('button')
      .simulate('click');
    expect(sequenceForm.text()).toEqual('Page2');
  });

  test('On click of the next button it should goto Page2', () => {
    const sequenceForm = mount(
      <SequenceForm>
        <Page1/>
        <Page2/>
      </SequenceForm>
    );
    expect(sequenceForm.text()).toEqual('Page1');
    sequenceForm
      .find('button')
      .simulate('click');
    expect(sequenceForm.text()).toEqual('Page2');
  });
});