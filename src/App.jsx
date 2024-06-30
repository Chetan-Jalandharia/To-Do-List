import React, { useEffect } from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center ">To-Do List</h1>
              <TaskInput />
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
