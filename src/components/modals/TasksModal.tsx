import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTasks } from '../../context/TaskContext';
import { useModal } from '../../hooks/useModal';

const TasksModal: React.FC = () => {
  const { tasks, addTask } = useTasks();
  const { closeModal } = useModal();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      addTask(newTaskTitle.trim());
      setNewTaskTitle('');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-[#98c379]">Tasks</h2>
      
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 bg-[#282c34] text-[#abb2bf] rounded-md p-2"
        />
        <button
          type="submit"
          className="p-2 bg-[#98c379] text-[#282c34] rounded-md hover:bg-[#7cb36a] transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </form>

      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {tasks.length === 0 ? (
          <p className="text-[#abb2bf] text-center py-4">No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-3 bg-[#282c34] rounded-lg"
            >
              <span className={task.completed ? 'line-through text-[#545862]' : 'text-[#abb2bf]'}>
                {task.title}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TasksModal;