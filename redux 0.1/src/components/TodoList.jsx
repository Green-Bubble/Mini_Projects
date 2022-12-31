import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = []; //TODO: Get todos from store;

  const onAddTodo = (text) => {
    // TODO: dispatch action from ADD_TODO
  };

  const onTogggleTodo = (id) => {
    // TODO: dispatch action from TOGGLE_TODO
  };

  const onDeleteTodo = (id) => {
    // TODO: dispatch action from DELETE_TODO
  };

  return (
    <div>
      <h3>My Todos</h3>
      <TodoInput addTodo={onAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem {...todo} toggleTodo={onTogggleTodo} deleteTodo={onDeleteTodo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
