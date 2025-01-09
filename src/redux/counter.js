import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, getData } from "./counter.slice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const data = useSelector((state) => state.counter.data);
  console.log('data', data)
  const dispatch = useDispatch();

  const getDataFromApi = () => {
    dispatch(getData())
    .unwrap()
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      // handle error here
    })
  }
  return (
    <div>
      Counter component - {count}
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>Increment by 3</button>
      <br />
      <button onClick={() => getDataFromApi()}>Call data from endpoint</button>
      <div>
        {data.length > 0 &&  data.map((d) => <div>{d.title}</div>)}
      </div>
    </div>
  );
};

export default Counter;
