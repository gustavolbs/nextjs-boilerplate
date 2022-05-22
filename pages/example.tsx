import { useCounter } from "../contexts/CounterContext";
import { useUsers } from "../hooks/useUsers";

function Page2() {
  const { counter, increment, decrement, reset } = useCounter();
  const { users, isLoading } = useUsers();

  return (
    <div>
      <h1>Hello World</h1>
      <div className="counter">
        <span>Counter: {counter}</span>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

      {isLoading ? (
        <span>Please wait...</span>
      ) : (
        <pre>{JSON.stringify(users, null, 2)}</pre>
      )}
    </div>
  );
}

export default Page2;
