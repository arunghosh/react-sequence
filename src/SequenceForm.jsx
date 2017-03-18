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
      currentIndex,
      key: null
    });
  }

  gotoKey(key) {
    const currentIndex = this.props.children.findIndex(c => {
      return c.key === key;
    });
    if (currentIndex === -1) {
      // element not found
      return;
    }
    this.setState({
      currentIndex
    });
  }

  render() {
    let child = this.props.children;
    if (Array.isArray(this.props.children)) {
      child = this.props.children[this.state.currentIndex];
    }
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

