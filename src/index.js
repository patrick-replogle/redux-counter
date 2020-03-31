import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { reducer } from './reducers/index.js';
import { incrementValue, decrementValue, resetValue } from './actions/index.js';
import './styles.scss';

const store = createStore(reducer);

class Counter extends Component {
  render() {
    const { count, incrementValue, decrementValue, resetValue } = this.props;
    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={incrementValue}>Increment</button>
          <button onClick={decrementValue}>Decrement</button>
          <button onClick={resetValue}>Reset</button>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = {
  incrementValue,
  decrementValue,
  resetValue,
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root'),
);
