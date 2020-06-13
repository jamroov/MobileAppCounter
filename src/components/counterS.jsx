import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - rendered");
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
    console.log(this.props);
    return (
      <>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      <button
          onClick={onReset}
          className="btn btn-secondary btn-sm"
        >
          Reset
      </button>
      </>
    );
  }
}
export default Counters;
