import { Provider } from "react-redux";
import Posts from './posts';
import store  from "./store";

const ReduxThunkExample = () => {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
};

export default ReduxThunkExample;