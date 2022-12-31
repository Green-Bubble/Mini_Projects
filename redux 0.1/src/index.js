import { createStore } from "./redux";

// root reducers
const rootReducers = (state = [], action = {}) => {


  return {
    todos: todoReducer(state.todos, action),
    goals: goalsReducer(state.goals, action),
  };
};

// Action Creator
// action creator todos
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

// action creator goals
const addGoalActionCreator = ({ id, text }) => {
  return {
    type: "ADD_GOAL",
    payload: {
      id,
      text,
    },
  };
};

const deleteGoalActionCreator = (id) => {
  return {
    type: "DELETE_GOAL",
    payload: {
      id,
    },
  };
};

// Reducers
// todo reducer
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

// goals reducer
const goalsReducer = (goals = [], action = {}) => {
  if (action.type === "ADD_GOAL") {
    return [...goals, action.payload];
  }

  if (action.type === "DELETE_GOAL") {
    return goals.filter((goal) => goal.id !== action.payload.id);
  }

  return goals;
};

// consume
const store = createStore(rootReducers);

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

store.dispatch(
  addGoalActionCreator({
    id: 1,
    text: "Get a Doctorate",
  })
);

store.dispatch(
  addGoalActionCreator({
    id: 2,
    text: "Be an Entrepeneur",
  })
);

store.dispatch(deleteGoalActionCreator(1));
