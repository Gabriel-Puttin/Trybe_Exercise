import React, { Component } from "react";

class ColorBox extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="box"
          style={{ backgroundColor: 'blue' }}
        >
          Click me to change my color!
        </button>
      </div>);
  }
}

export default ColorBox;
