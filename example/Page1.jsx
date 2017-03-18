import React from 'react';

function Page1(props) {
  return (
    <div>
      <div>Page 1</div>
      <button onClick={() => props.gotoKey('page2')}>Prev</button>
      <button onClick={props.gotoNext}>Next</button>
    </div>
  );
}

export default Page1
