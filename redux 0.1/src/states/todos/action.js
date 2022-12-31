const addTodoActionCreator = ({ id, text }) => {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      text,
    },
  };
};

const deleteTodoActionCreator = (id) => {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
};

const toggleActionCreator = (id) => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id,
    },
  };
};

export { addTodoActionCreator, deleteTodoActionCreator, toggleActionCreator };
