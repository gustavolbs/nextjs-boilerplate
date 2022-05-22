import { useCounter } from "../contexts/CounterContext";

function Page2() {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Hello World</h1>
      <div className="counter">
        <span>Counter: {counter}</span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Page2;
