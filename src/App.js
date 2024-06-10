import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/characters/:name" element={<ProtectedRoute component={CharacterDetail} />} />
          <Route path="/characters" element={<ProtectedRoute component={CharacterList} />} />
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
