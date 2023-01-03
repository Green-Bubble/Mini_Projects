import mockAPI from "../../data/mockAPI";

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

const recieveTodosActionCreator = (todos) => {
  return {
    type: "RECIEVE_TODOS",
    payload: {
      todos,
    },
  };
};

const asyncRecieveTodos = () => {
  return async (dispatch) => {
    const todos = await mockAPI.getTodos();
    dispatch(recieveTodosActionCreator(todos));
  };
};

const asyncAddTodo = (text) => {
  return async (dispatch) => {
    const { id } = await mockAPI.addTodo(text);
    dispatch(addTodoActionCreator({ id, text }));
  };
};

const asyncDeleteTodo = (id) => {
  return async (dispatch) => {
    await mockAPI.deleteTodos(id);
    dispatch(deleteTodoActionCreator(id));
  };
};

const asyncToggleTodo = (id) => {
  return async (dispatch) => {
    await mockAPI.toggleTodo(id);
    dispatch(toggleActionCreator(id));
  };
};

export { addTodoActionCreator, deleteTodoActionCreator, toggleActionCreator, recieveTodosActionCreator, asyncAddTodo, asyncDeleteTodo, asyncRecieveTodos, asyncToggleTodo };
