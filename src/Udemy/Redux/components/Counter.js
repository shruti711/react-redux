import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../Store/Counter';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const increaseCounterHandler = () => {
    dispatch(counterAction.increase(7)) // {type: SOME UNIQUE IDENTIFIRE, payload: 7}
  };

  const incrementCounterHandler = () => {
    dispatch(counterAction.increament())
  };
  const decrementCounterHandler = () => {
    dispatch(counterAction.decrement())
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };

  return(
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <>
          <div className={classes.value}>-- COUNTER VALUE -- {counter}</div>

          <button onClick={increaseCounterHandler}>Increase Counter</button>
          <button onClick={incrementCounterHandler}>Increment Counter</button>
          <button onClick={decrementCounterHandler}>Decrement Counter</button>
        </>
      )}
          <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
};

export default Counter;
