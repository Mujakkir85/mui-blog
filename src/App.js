import Nav from "./components/Nav";
import Products from "./components/Products";
import {Provider} from 'react-redux';
import store from "./mainredux/store";
import ShowAllUser from "./components/ShowAllUser";
import ShowAllPost from "./components/ShowAllPost";

function App() {
  return (
  <Provider store={store}>
    <div className='App'>
      <ShowAllUser></ShowAllUser>
      <ShowAllPost></ShowAllPost>
      {/*<Nav></Nav>*/}
      {/*<Products></Products>*/}
    </div>
  </Provider>

  );
}

export default App;
