import { CounterWrapper } from "./Counter.styled";

export const Counter = ({ checkedList }) => {
  return <CounterWrapper>Selected: {checkedList.length}</CounterWrapper>;
};
