import React, { Component } from 'react';
import './App.css';
import Counter from "./components/counter";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, heart: "fa fa-heart fa-1x" },
      { id: 2, value: 0, heart: "fa fa-heart fa-1x" },
      { id: 3, value: 0, heart: "fa fa-heart fa-1x" },
      { id: 4, value: 0, heart: "fa fa-heart fa-1x" },
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

  handleSwitchHearts = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    console.log(counters[index].heart)
    if (!counters[index].heart.localeCompare("fa fa-heart fa-1x")) {
      console.log("HEart is filled")
      counters[index].heart = "fa fa-heart-o fa-1x";
    }
    else {
      console.log("HEart is empty")
      counters[index].heart = "fa fa-heart fa-1x";
    }
    console.log("Switch hearts.")
    this.setState({counters});
  }

  render() {
    console.log(this.props);
    console.log("App - rendered");
    console.log(this.state.counters[0].heart)
    return (
      <>
        <Navbar totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            id={counter.id}
            heart={counter.heart}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            switchHearts={this.handleSwitchHearts}
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
