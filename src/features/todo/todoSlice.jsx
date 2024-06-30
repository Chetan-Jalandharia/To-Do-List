import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: JSON.parse(localStorage.getItem('tasks')) || [{ id: 1, text: "complete assignment and push on github" },
  { id: 2, text: "Study maths for 2 hours" }],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
})

export const { addTask, deleteTask, editTask, toggleTask } = todoSlice.actions;

export default todoSlice.reducer;