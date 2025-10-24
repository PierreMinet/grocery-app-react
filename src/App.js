import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import { useState } from 'react';
import { ConnectionContext } from './context/ConnectionContext';
import { LandingContext } from './context/LandingContext';

function App() {
  const [connection, setConnection] = useState(false);
  const [landing, setLanding] = useState('landing');

  return (
    <>
      <ConnectionContext value={{connection, setConnection}}>
        <LandingContext value={{landing, setLanding}}>
          <Routes>
              <Route path='/' element={<Homepage />} />
          </Routes>
        </LandingContext>
      </ConnectionContext>
    </>
  );
}

export default App;