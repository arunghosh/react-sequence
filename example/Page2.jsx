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

