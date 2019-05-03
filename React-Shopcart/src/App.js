import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import f1 from "./assets/f1.jpg";
import f2 from "./assets/f2.jpg";
import f3 from "./assets/f3.jpg";
import f4 from "./assets/f4.jpg";
import f5 from "./assets/f5.jpg";
import f6 from "./assets/f6.jpg";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, imageUrl: f1 },
      { id: 2, value: 0, imageUrl: f2 },
      { id: 3, value: 0, imageUrl: f3 },
      { id: 4, value: 0, imageUrl: f4 },
      { id: 5, value: 0, imageUrl: f5 },
      { id: 6, value: 0, imageUrl: f6 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalLength={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
