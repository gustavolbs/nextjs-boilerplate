import { FC } from "react";
import { CounterContextProvider } from "./CounterContext";

interface IProviders {
  children?: React.ReactNode;
}

const Providers: FC<IProviders> = ({ children }) => {
  return (
    <>
      <CounterContextProvider>{children}</CounterContextProvider>
    </>
  );
};

export default Providers;
