import React, { useState } from 'react';
import { Check, Edit2, Trash2, X, Save } from 'lucide-react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onEditTask,
  onDeleteTask,
}) => {
  const [editingTask, setEditingTask] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>('');

  const handleEditClick = (task: Task) => {
    setEditingTask(task.id);
    setEditedTitle(task.title);
  };

  const handleSaveEdit = (task: Task) => {
    if (editedTitle.trim()) {
      onEditTask({ ...task, title: editedTitle.trim() });
    }
    setEditingTask(null);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setEditedTitle('');
  };

  return (
    <div className="w-full max-w-md space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-3 bg-[#282c34] rounded-lg"
        >
          <div className="flex items-center space-x-3 flex-1">
            <button
              onClick={() => onToggleTask(task.id)}
              className={`p-1 rounded-md transition-colors ${
                task.completed ? 'bg-[#98c379]' : 'bg-[#3e4451]'
              }`}
            >
              <Check className={`w-4 h-4 ${task.completed ? 'text-[#282c34]' : 'text-[#98c379]'}`} />
            </button>
            
            {editingTask === task.id ? (
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="flex-1 bg-[#3e4451] text-[#abb2bf] rounded px-2 py-1 outline-none focus:ring-1 focus:ring-[#98c379]"
                autoFocus
              />
            ) : (
              <span className={`${task.completed ? 'line-through text-[#545862]' : 'text-[#abb2bf]'}`}>
                {task.title}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            {editingTask === task.id ? (
              <>
                <button
                  onClick={() => handleSaveEdit(task)}
                  className="p-1 hover:bg-[#3e4451] rounded-md transition-colors"
                >
                  <Save className="w-4 h-4 text-[#98c379]" />
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="p-1 hover:bg-[#3e4451] rounded-md transition-colors"
                >
                  <X className="w-4 h-4 text-[#e06c75]" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleEditClick(task)}
                  className="p-1 hover:bg-[#3e4451] rounded-md transition-colors"
                >
                  <Edit2 className="w-4 h-4 text-[#61afef]" />
                </button>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="p-1 hover:bg-[#3e4451] rounded-md transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-[#e06c75]" />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;