# react-sequence-form

React component which can aid navigation of sequence of react components. The sequence of components will be set as the children(see usage). There are 3 available navigation options now and these will ne injected to the props of the components
* **gotoNext** - shall navigate to the next component
* **gotoPrev** - shall navigate to the previous component
* **gotoKey** - shall navigate to the component specified by the argument

[![Build Status](https://travis-ci.org/arunghosh/react-sequence-form.svg?branch=master)](https://travis-ci.org/arunghosh/react-sequence-form)

## Installation
```
npm install --save react-sequence
```

##Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import SeqenceForm from 'react-sequence';
import Page1 from './Page1';
import Page2 from './Page2';

ReactDOM.render(
  <SeqenceForm>
    <Page1 key="page1" />
    <Page2 key="page2" />
  </SeqenceForm>,
  document.getElementById('app')
);

```

Page2.jsx
```javascript
import React from 'react';

function Page2(props) {
  return (
    <div>
      <div>Page 2</div>
      <button onClick={props.gotoPrev}>Prev</button>
      <button onClick={() => props.gotoKey('page1')}>Next</button>
    </div>
  );
}

export default Page2
```

Page1.jsx
```javascript
import React from 'react';

function Page1(props) {
  return (
    <div>
      <div>Page 1</div>
      <button onClick={props.gotoPrev}>Prev</button>
      <button onClick={props.gotoNext}>Next</button>
    </div>
  );
}

export default Page1
```
