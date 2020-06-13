import React, { Component } from 'react';
import './App.css';
import Counter from "./components/counter";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  
  constructor (props) {
    super(props);
    console.log("App-Constructor", this.props);
  }

  componentDidMount() {
    this.setState();
    console.log("App mounted");
  }

  handleDelete = (id) => {
    const counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({ counters });
  };

  handleResetAll = () => {
    var i;
    const counters = [...this.state.counters];
    for (i = 0; i < counters.length; i++) {
      counters[i].value = 0;
      this.setState({counters});
    }
    console.log("reset all");
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    console.log("Increment");
    this.setState({counters});
  };

  handleReset = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value = 0;
    console.log("Reset");
    this.setState({counters});
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if (counters[index].value > 0) {
      counters[index].value--;
    }
    console.log("Decrement");
    this.setState({counters});
  }

  render() {
    console.log(this.props);
    console.log("App - rendered");
    return (
      <>
        <Navbar totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            id={counter.id}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        ))}
      <button
          onClick={() => this.handleResetAll()}
          className="btn btn-secondary btn-sm"
        >
          Reset All
      </button>
      </>
    );
  }
};

// function App() {
//   return (
//     <>
//       <div className="App">
//         <Navbar />
//         <main classname="container" role="main">
//         <Counters />
//         </main>
//       </div>
//     </>
//   );
// }

export default App;
