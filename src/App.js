
import Nav from "./components/Nav";
import logo from './logo.svg';
import './App.css';
import './nav.css';
import './footer.css';
import './index.css'
import Footer from "./components/Footer";
import SignUpLogin from "./register-login";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Nav/>
      <SignUpLogin/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/