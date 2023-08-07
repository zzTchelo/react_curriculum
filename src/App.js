import './App.css';
import Navbar from './navbar';
import Sidebar from './sidebar';

function App() {
  return (
      <div className='main'>
        <Sidebar />
        <Navbar />
      </div>
    );
  }
  
export default App;