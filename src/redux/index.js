import { Provider } from "react-redux";
import Counter from "./counter";
import { store } from "./store";

const LearnRedux = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default LearnRedux;
