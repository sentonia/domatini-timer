import React, { createContext, useContext, useState, useEffect } from 'react';
import { TimerSettings, TimerMode } from '../types';

interface TimerContextType {
  settings: TimerSettings;
  updateSettings: (settings: TimerSettings) => void;
  mode: TimerMode;
  setMode: (mode: TimerMode) => void;
  timeLeft: number;
  isRunning: boolean;
  toggleTimer: () => void;
  resetTimer: () => void;
  nextMode: () => void;
  completedPomodoros: number;
}

const defaultSettings: TimerSettings = {
  studyTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  autoStart: false,
  volume: 0.7,
  soundEnabled: true,
  pomodorosUntilLongBreak: 4,
};

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<TimerSettings>(defaultSettings);
  const [mode, setMode] = useState<TimerMode>('study');
  const [timeLeft, setTimeLeft] = useState(settings.studyTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      playSound();
      if (settings.autoStart) {
        handleModeChange();
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const playSound = () => {
    if (settings.soundEnabled) {
      const audio = new Audio('/notification.mp3');
      audio.volume = settings.volume;
      audio.play();
    }
  };

  const handleModeChange = () => {
    if (mode === 'study') {
      const newCompletedPomodoros = completedPomodoros + 1;
      setCompletedPomodoros(newCompletedPomodoros);
      
      if (newCompletedPomodoros % settings.pomodorosUntilLongBreak === 0) {
        setMode('longBreak');
        setTimeLeft(settings.longBreakTime * 60);
      } else {
        setMode('shortBreak');
        setTimeLeft(settings.shortBreakTime * 60);
      }
    } else {
      setMode('study');
      setTimeLeft(settings.studyTime * 60);
    }
    setIsRunning(settings.autoStart);
  };

  const nextMode = () => {
    handleModeChange();
    setIsRunning(false);
  };

  const toggleTimer = () => setIsRunning(!isRunning);
  
  const resetTimer = () => {
    setIsRunning(false);
    if (mode === 'study') {
      setTimeLeft(settings.studyTime * 60);
    } else if (mode === 'shortBreak') {
      setTimeLeft(settings.shortBreakTime * 60);
    } else {
      setTimeLeft(settings.longBreakTime * 60);
    }
  };

  const updateSettings = (newSettings: TimerSettings) => {
    setSettings(newSettings);
    if (mode === 'study') {
      setTimeLeft(newSettings.studyTime * 60);
    } else if (mode === 'shortBreak') {
      setTimeLeft(newSettings.shortBreakTime * 60);
    } else {
      setTimeLeft(newSettings.longBreakTime * 60);
    }
  };

  return (
    <TimerContext.Provider
      value={{
        settings,
        updateSettings,
        mode,
        setMode,
        timeLeft,
        isRunning,
        toggleTimer,
        resetTimer,
        nextMode,
        completedPomodoros,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) throw new Error('useTimer must be used within TimerProvider');
  return context;
};