import { Button } from "../components/Button";
import CollapsibleList from "../components/CollapsibleList";

import { useCounter } from "../contexts/CounterContext";

import { useUsers } from "../hooks/useUsers";

function Page2() {
  const { counter, increment, decrement, reset } = useCounter();
  const { users: data, isLoading } = useUsers();

  return (
    <div>
      <h1>Hello World</h1>
      <div className="counter">
        <span>Counter: {counter}</span>
        <Button label="Increment" onClick={increment} />
        <Button label="Decrement" onClick={decrement} />
        <Button label="Reset" onClick={reset} />
      </div>

      {isLoading ? (
        <span>Please wait...</span>
      ) : (
        <CollapsibleList data={data.users} title="Users" />
      )}
    </div>
  );
}

export default Page2;
