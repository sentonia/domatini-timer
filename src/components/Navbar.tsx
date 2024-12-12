import React from 'react';
import { Settings, ListTodo, User, Coffee } from 'lucide-react';
import { useModal } from '../hooks/useModal';
import SettingsModal from './modals/SettingsModal';
import TasksModal from './modals/TasksModal';
import LoginModal from './modals/LoginModal';

const Navbar: React.FC = () => {
  const { openModal } = useModal();

  return (
    <nav className="w-full bg-[#282c34] p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <span className="text-3xl" role="img" aria-label="tomato">🍅</span>
        <span className="text-3xl font-bold text-[#98c379] font-agbalumo">Domatini</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={() => openModal(<TasksModal />)}
          className="p-2 hover:bg-[#3e4451] rounded-lg transition-colors"
        >
          <ListTodo className="w-5 h-5 text-[#61afef]" />
        </button>
        
        <button
          onClick={() => openModal(<SettingsModal />)}
          className="p-2 hover:bg-[#3e4451] rounded-lg transition-colors"
        >
          <Settings className="w-5 h-5 text-[#61afef]" />
        </button>
        
        <button
          onClick={() => openModal(<LoginModal />)}
          className="p-2 hover:bg-[#3e4451] rounded-lg transition-colors"
        >
          <User className="w-5 h-5 text-[#61afef]" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;