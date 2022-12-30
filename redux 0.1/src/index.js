import { createStore } from "./redux";

// action creator
const addTodoActionCreator = ({ id, text }) => {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      text,
      complete: false,
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

// reducer
const todoReducer = (todos = [], action = {}) => {
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload];
  }

  if (action.type === "DELETE_TODO") {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }

  if (action.type === "TOGGLE_TODO") {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
  }

  return todos;
};

// consume
const store = createStore(todoReducer);

// subscribe state changed
store.subscribe(() => {
  console.log("State Changed!", store.getState());
});

store.dispatch(
  addTodoActionCreator({
    id: 1,
    text: "Learn React",
  })
);

store.dispatch(
  addTodoActionCreator({
    id: 2,
    text: "dua",
  })
);

store.dispatch(
  addTodoActionCreator({
    id: 3,
    text: "tiga",
  })
);

store.dispatch(deleteTodoActionCreator(2));
store.dispatch(deleteTodoActionCreator(3));

store.dispatch(toggleActionCreator(1));

store.dispatch(
  addTodoActionCreator({
    id: 4,
    text: "empat",
  })
);

store.dispatch(toggleActionCreator(4));