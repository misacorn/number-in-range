import React from "react";
import './Slider.css'

class Slider extends React.Component {
  state = { number: 500 };

  handleChange = evt => {
    this.setState({ number: evt.target.value });
  };
  render() {
    return (
      <div className="row justify-content-center align-items-center text-align-center">
        <div className="col-10 ">
          <span>Your Grand Total Is</span>
          <h1 id="number" className="display-1 d-inline-block">
            {this.state.number}
          </h1>
          <label for="customRange1">Million Trillion Dollars</label>
          <input
            type="range"
            className="custom-range"
            id="customRange1"
            min="100"
            max="999"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Slider;
