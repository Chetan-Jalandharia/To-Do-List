import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/todo/todoSlice';

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

export default store;
