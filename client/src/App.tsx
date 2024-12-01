import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: '#DCDCF5' }}>
        <main className='container pt-5' style={{ backgroundColor: '#DCDCF5' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
