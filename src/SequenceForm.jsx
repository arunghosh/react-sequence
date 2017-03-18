import React, { Component } from 'react';

class SeqenceForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrev = this.gotoPrev.bind(this);
    this.gotoKey = this.gotoKey.bind(this);
  }

  gotoPrev() {
    if (this.state.currentIndex === 0) return;
    const currentIndex = this.state.currentIndex - 1;
    this.setState({
      currentIndex,
    });
  }

  gotoNext() {
    if (this.state.currentIndex === this.props.children.length - 1) return;
    const currentIndex = this.state.currentIndex + 1;
    this.setState({
      currentIndex,
    });
  }

  gotoKey(key) {
    const currentIndex = this.props.children.findIndex((c) => c.key === key);
    if (currentIndex === -1) {
      // element not found
      return;
    }
    this.setState({
      currentIndex,
    });
  }

  render() {
    if (!Array.isArray(this.props.children)) {
      throw new Error('SeqenceForm: The children should be an array');
    }
    const child = this.props.children[this.state.currentIndex];
    const childithProps = React.cloneElement(
      child, {
        gotoNext: this.gotoNext,
        gotoPrev: this.gotoPrev,
        gotoKey: this.gotoKey,
      },
    );
    return (
      <div>{childithProps}</div>
    );
  }
}

SeqenceForm.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default SeqenceForm;

