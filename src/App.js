import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <h1>It's a Big World Out<br></br> There, Go Explore.</h1>
      <p>We always make our customers happy by providing many choices.</p> 
      <div className='buttons'>
        <div id='get-started'>
          <h3>Get Started</h3>
        </div>
        <div id='get-demo'>
          <h3>Get a Demo</h3>
        </div>
      </div>

      <Dashboard />
    </div>
  );
}

export default App;
