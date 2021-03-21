import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Routes from './routes/routes';
import configureStore from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
