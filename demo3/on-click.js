"use strict";

class OnClickElements extends React.Component {
  constructor() {
    super();
  }

  handleClick = (event) => {
    alert(`hey! you clicked: ${event.target.id}`);
  }

  render() {
    return (
      <div className="container-div">
        {/* Text elements in the first row */}
        <div id="div-element" className="text-element" onClick={this.handleClick}>
          I am DIV
        </div>
        <span id="span-element" className="text-element" onClick={this.handleClick}>
          I am SPAN
        </span>
        <a id="link-element" href="#" onClick={this.handleClick}>
          I am LINK
        </a>

        {/* Button-like clickable elements */}
        <button id="button-element" onClick={this.handleClick}>
          I am Button
        </button>
        <div id="div-element-2" className="button" onClick={this.handleClick}>
          I am DIV
        </div>
        <span id="span-element-2" className="button" onClick={this.handleClick}>
          I am SPAN
        </span>
        <button id="button-element-2" className="button" onClick={this.handleClick}>
          I am Button
        </button>
        <a id="link-element-2" className="button" href="#" onClick={this.handleClick}>
          I am LINK
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(OnClickElements),
  document.getElementById("root")
);
