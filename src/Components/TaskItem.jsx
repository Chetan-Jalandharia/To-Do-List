import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, FormControl, ListGroup, FormCheck, Modal, Row, Col } from 'react-bootstrap';
import { deleteTask, editTask, toggleTask } from '../features/todo/todoSlice';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text }));
    setIsEditing(false);
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setText(task.text);  // Reset text to current task text
  };

  return (
    <>
      <Row>
        <ListGroup.Item className="d-flex justify-content-between align-items-center">

          <Col lg={1} sm={1} xs={1} md={1} className='d-flex justify-content-center'>
            <FormCheck
              type="checkbox"
              checked={task.completed}
              onChange={handleToggle}
            />
          </Col>
          <Col lg={9} sm={9} xs={9} md={9}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {task.text}
            </span>
          </Col>
          <Col lg={2} sm={2} xs={2} md={2} className='d-flex justify-content-evenly flex-wrap gap-2'>
            <Button onClick={handleEdit} variant="warning" size="sm" className="">Edit</Button>
            <Button onClick={handleDelete} variant="danger" size="sm" className=''>Delete</Button>
          </Col>
        </ListGroup.Item>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskItem;
