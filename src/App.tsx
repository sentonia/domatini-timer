import React from 'react';
import { TimerProvider } from './context/TimerContext';
import { TaskProvider } from './context/TaskContext';
import { ModalProvider } from './hooks/useModal';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import TaskList from './components/TaskList';
import { useTasks } from './context/TaskContext';

const TaskListContainer = () => {
  const { tasks, toggleTask, editTask, deleteTask } = useTasks();
  return (
    <TaskList
      tasks={tasks}
      onToggleTask={toggleTask}
      onEditTask={(task) => editTask(task.id, task.title)}
      onDeleteTask={deleteTask}
    />
  );
};

function App() {
  return (
    <AuthProvider>
      <TimerProvider>
        <TaskProvider>
          <ModalProvider>
            <div className="min-h-screen bg-[#21252b] text-white">
              <Navbar />
              <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center space-y-12">
                  <Timer />
                  <TaskListContainer />
                </div>
              </main>
            </div>
          </ModalProvider>
        </TaskProvider>
      </TimerProvider>
    </AuthProvider>
  );
}

export default App;