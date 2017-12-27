import React, { Component } from 'react';

class OptionsBox extends Component {
  constructor() {
    super();
    this.handleResponseDisplay = this.handleResponseDisplay.bind(this);
    this.handleClearResponse = this.handleClearResponse.bind(this);

    this.state = {
      showResponse: false,
      response: '',
    };
  }

  handleResponseDisplay(e) {
    e.preventDefault();
    this.setState({
      showResponse: true,
      response: 'Functionality coming soon.',
    });
    this.handleClearResponse();
  }

  handleClearResponse() {
    const setState = () => this.setState({
      showResponse: false,
      response: '',
    });

    setTimeout(setState, 2000);
  }

  render() {
    return (
      <div className="optionsBox">
        <a
          href="/"
          className="optionsBox__button optionsBox__button-review"
          onClick={this.handleResponseDisplay}
        >View Details
        </a>
        <p className="optionsBox__response">{this.state.showResponse ? this.state.response : ''}</p>
      </div>
    );
  }
}


export default OptionsBox;
