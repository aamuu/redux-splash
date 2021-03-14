import { Provider } from 'react-redux'
import configureStore from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Hello World!!
    </div>
    </Provider>
  );
}

export default App;
