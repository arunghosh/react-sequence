# react-sequence-form

React component which can aid navigation of sequence of form (via next, previos)

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
    <Page1 />
    <Page2 />
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
      <button onClick={props.gotoNext}>Next</button>
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
