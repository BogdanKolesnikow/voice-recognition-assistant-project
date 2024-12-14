import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import './components/Docs.css';
import './components/Docs';

const App = () => {
  return (
    <div>
        <div className='title'>
            <h1>VRA</h1>
            <p>Voice Recognition Assistant Tool</p>
        </div>
        {/* <div className='docs'>
            <Link to="/docs">
                <button>DOCS</button>
            </Link>
        </div> */}
    </div>
  );
};

export default App;
