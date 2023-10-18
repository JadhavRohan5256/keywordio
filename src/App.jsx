import './App.css';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <>
      <div className='nav-wrapper'>
        <div className='nav container'>
          <div className='nav-left'>
            <h2 className='logo'>App Logo</h2>
          </div>
          <ul className='nav-right'>
            <li>
              <a href='#'>dashboard</a>
            </li>
            <li>
              <a href='#'>create ads</a>
            </li>
          </ul>
        </div>
      </div>

      <Dashboard />

    </>
  );
}

export default App;
