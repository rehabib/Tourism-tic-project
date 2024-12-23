import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import UserAuthModal from './components/UserAuthModal'; // UserAuthModal component for login/signup
import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/Login';
import SignupPage from './page/Signup';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
   
  return (
    
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <Header openModal={openModal} />
      <UserAuthModal isOpen={isModalOpen} closeModal={closeModal} />
      <div className="pt-16"> {/* Adjust padding to make space for the header */}
        <Routes>
          {/*<Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          */}
          
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      
      <h1 className="text-center text-4xl text-white">App is running!</h1>
    </div>
  );
}

export default App;
