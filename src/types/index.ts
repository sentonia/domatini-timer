export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export interface TimerSettings {
  studyTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  autoStart: boolean;
  volume: number;
  soundEnabled: boolean;
  pomodorosUntilLongBreak: number;
}

export type TimerMode = 'study' | 'shortBreak' | 'longBreak';