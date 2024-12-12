import React, { useState } from 'react';
import { Github, LogOut, Mail } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { signInWithGithub, signInWithGoogle, signOutUser } from '../../services/firebase';
import { useModal } from '../../hooks/useModal';

const LoginModal: React.FC = () => {
  const { user } = useAuth();
  const { closeModal } = useModal();
  const [error, setError] = useState<string | null>(null);

  const handleGithubLogin = async () => {
    const { error } = await signInWithGithub();
    if (error) {
      setError(error);
    } else {
      closeModal();
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await signInWithGoogle();
    if (error) {
      setError(error);
    } else {
      closeModal();
    }
  };

  const handleSignOut = async () => {
    const { error } = await signOutUser();
    if (error) {
      setError(error);
    } else {
      closeModal();
    }
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[300px]">
      <h2 className="text-2xl font-bold text-[#98c379] mb-8">
        {user ? 'Account' : 'Login'}
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-[#e06c75] bg-opacity-20 text-[#e06c75] rounded-md text-sm">
          {error}
        </div>
      )}

      {user ? (
        <div className="w-full max-w-sm space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={user.photoURL || ''}
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-[#98c379]"
            />
            <div className="text-center">
              <p className="text-[#abb2bf] font-medium text-lg">{user.displayName}</p>
              <p className="text-[#5c6370] text-sm">{user.email}</p>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center space-x-2 bg-[#e06c75] text-white p-3 rounded-md hover:bg-[#be5761] transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      ) : (
        <div className="w-full max-w-sm space-y-4">
          <button
            onClick={handleGithubLogin}
            className="w-full flex items-center justify-center space-x-2 bg-[#333] text-white p-3 rounded-md hover:bg-[#24292e] transition-colors shadow-lg"
          >
            <Github className="w-5 h-5" />
            <span>Continue with GitHub</span>
          </button>
          
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center space-x-2 bg-[#4285f4] text-white p-3 rounded-md hover:bg-[#3367d6] transition-colors shadow-lg"
          >
            <Mail className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginModal;