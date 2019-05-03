import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        <div className="row">
          {counters.map(counter => (
            <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncrement={e => onIncrement(e)}
                counter={counter}
              />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
