import React from 'react';
import { Volume2, Bell } from 'lucide-react';
import { useTimer } from '../../context/TimerContext';

const SettingsModal: React.FC = () => {
  const { settings, updateSettings } = useTimer();

  const handleChange = (key: keyof typeof settings, value: number | boolean) => {
    updateSettings({ ...settings, [key]: value });
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold text-[#98c379]">Timer Settings</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#abb2bf]">Study Time (minutes)</label>
          <input
            type="number"
            value={settings.studyTime}
            onChange={(e) => handleChange('studyTime', parseInt(e.target.value))}
            className="mt-1 w-full bg-[#282c34] text-[#abb2bf] rounded-md p-2"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#abb2bf]">Short Break (minutes)</label>
          <input
            type="number"
            value={settings.shortBreakTime}
            onChange={(e) => handleChange('shortBreakTime', parseInt(e.target.value))}
            className="mt-1 w-full bg-[#282c34] text-[#abb2bf] rounded-md p-2"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#abb2bf]">Long Break (minutes)</label>
          <input
            type="number"
            value={settings.longBreakTime}
            onChange={(e) => handleChange('longBreakTime', parseInt(e.target.value))}
            className="mt-1 w-full bg-[#282c34] text-[#abb2bf] rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#abb2bf]">Pomodoros Until Long Break</label>
          <input
            type="number"
            value={settings.pomodorosUntilLongBreak}
            onChange={(e) => handleChange('pomodorosUntilLongBreak', parseInt(e.target.value))}
            className="mt-1 w-full bg-[#282c34] text-[#abb2bf] rounded-md p-2"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-[#61afef]" />
            <span className="text-[#abb2bf]">Sound Enabled</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.soundEnabled}
              onChange={(e) => handleChange('soundEnabled', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#282c34] peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#98c379] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3e4451]"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Volume2 className="w-5 h-5 text-[#61afef]" />
            <span className="text-[#abb2bf]">Volume</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={settings.volume}
            onChange={(e) => handleChange('volume', parseFloat(e.target.value))}
            className="w-32"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-[#abb2bf]">Auto Start Breaks</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.autoStart}
              onChange={(e) => handleChange('autoStart', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#282c34] peer-focus:outline-none rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#98c379] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3e4451]"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;