import React, { Component } from "react";

class Counter extends Component {

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  handleReset = () => {
    this.setState({value: 0});
  }

  render() {
    var disabled;
    if (this.props.counter.value > 0) {
      disabled = false;
    }
    else {
      disabled = true;
    }
    console.log("Counter - rendered");
    return (
      <>
      <ul>
        <div className="row">
          <div className="col-2">
            <span className={this.getClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={disabled}
            >
              -
            </button>


            <button
              className="btn btn-danger btn-sm mr-2"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              x
            </button>
                <button
                onClick={() => this.props.onReset(this.props.counter)}
                className="btn btn-secondary btn-sm mr-2"
                >
                Reset
            </button>
            <i className="fa fa-heart fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </ul>
    </>
    );
  }

  renderTags() {
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
