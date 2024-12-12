import React from 'react';
import { Play, Pause, RefreshCw, SkipForward } from 'lucide-react';
import { useTimer } from '../context/TimerContext';

const Timer: React.FC = () => {
  const { timeLeft, isRunning, toggleTimer, resetTimer, mode, nextMode, completedPomodoros, settings } = useTimer();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-8xl font-bold text-[#98c379] font-mono">
        {formatTime(timeLeft)}
      </div>
      
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTimer}
          className="p-4 bg-[#3e4451] hover:bg-[#4b5363] rounded-full transition-colors"
        >
          {isRunning ? (
            <Pause className="w-8 h-8 text-[#e06c75]" />
          ) : (
            <Play className="w-8 h-8 text-[#98c379]" />
          )}
        </button>
        
        <button
          onClick={resetTimer}
          className="p-4 bg-[#3e4451] hover:bg-[#4b5363] rounded-full transition-colors"
        >
          <RefreshCw className="w-8 h-8 text-[#61afef]" />
        </button>

        <button
          onClick={nextMode}
          className="p-4 bg-[#3e4451] hover:bg-[#4b5363] rounded-full transition-colors"
        >
          <SkipForward className="w-8 h-8 text-[#c678dd]" />
        </button>
      </div>
      
      <div className="flex flex-col items-center space-y-2">
        <div className="text-xl font-medium text-[#abb2bf]">
          {mode === 'study' ? 'Focus Time' : mode === 'shortBreak' ? 'Short Break' : 'Long Break'}
        </div>
        <div className="text-sm text-[#5c6370]">
          Pomodoros: {completedPomodoros} / {settings.pomodorosUntilLongBreak}
        </div>
      </div>
    </div>
  );
};

export default Timer;