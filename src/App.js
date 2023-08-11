import './App.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Router from './routes';

function App() {
  return (
      <div className='main'>
        <aside>
          <Sidebar />
        </aside>
        <div className='main-content'>
          <Navbar />
          <Router />
        </div>
      </div>
    );
  }
  
export default App;