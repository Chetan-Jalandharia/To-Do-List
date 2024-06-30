import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/todo/todoSlice';
import { Button, Form, InputGroup } from 'react-bootstrap';

const TaskInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="my-4">
      <InputGroup>
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <Button type="submit" variant="primary" >Add Task</Button>
      </InputGroup>
    </Form>
  );
};

export default TaskInput;
