import React, { Component } from 'react';


class SeqenceForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrev = this.gotoPrev.bind(this);
  }

  gotoPrev() {
    if(currentIndex === 0) return;
    const currentIndex = this.state.currentIndex - 1;
    this.setState({
      currentIndex
    });
  }

  gotoNext() {
    if(currentIndex === this.props.children.length - 1) return;
    const currentIndex = this.state.currentIndex + 1;
    this.setState({
      currentIndex
    });
  }

  render() {
    const child = this.props.children[this.state.currentIndex];
    const childithProps = React.cloneElement(
      child, {
        gotoNext: this.gotoNext,
        gotoPrev: this.gotoPrev
      }
    );
    return (
      <div>{childithProps}</div>
    );
  }
}

export default SeqenceForm;

