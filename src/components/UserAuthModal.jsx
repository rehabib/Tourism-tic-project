import { useState } from 'react';
import Login from './Login'; // Login Component
import Signup from './Signup'; // Signup Component

export default function UserAuthModal({ isOpen, closeModal }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-96 p-8 relative">
        <button className="absolute top-2 right-2 text-xl" onClick={closeModal}>
          ×
        </button>
        {isLogin ? <Login /> : <Signup />}
        <div className="mt-4 text-center">
          <button
            className="text-purple-600"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
