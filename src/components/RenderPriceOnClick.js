import React from 'react';
import BTC from './BTC.js';
import './RenderPriceOnClick.css';

class RenderPriceOnClick extends React.Component {
  constructor(props) {
    super(props);
    this.handleFetchBtcPriceClick = this.handleFetchBtcPriceClick.bind(this);
    this.handleHideBtcPriceClick = this.handleHideBtcPriceClick.bind(this);
    this.state = {isPriceDisplayed: false};
  }

  handleFetchBtcPriceClick() {
    this.setState({isPriceDisplayed: true});
  }

  handleHideBtcPriceClick() {
    this.setState({isPriceDisplayed: false});
  }

  render() {
    const isPriceDisplayed = this.state.isPriceDisplayed;
    let button;

    if (isPriceDisplayed) {
      button = <HideBtcPrice onClick={this.handleHideBtcPriceClick} />;
    } else {
      button = <FetchBtcPrice onClick={this.handleFetchBtcPriceClick} />;
    }

    return (
      <div>
        <Greeting isPriceDisplayed={isPriceDisplayed} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1><BTC /></h1>;
}

function GuestGreeting(props) {
  return <h1>Are we over $10k yet?</h1>;
}

function Greeting(props) {
  const isPriceDisplayed = props.isPriceDisplayed;
  if (isPriceDisplayed) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function FetchBtcPrice(props) {
  return (
    <button className="large" onClick={props.onClick} >
      Click for BTC Price
    </button>
  );
}

function HideBtcPrice(props) {
  return (
    <button className ="large" onClick={props.onClick}>
      Click to Hide Price
    </button>
  );
}

export default RenderPriceOnClick;
