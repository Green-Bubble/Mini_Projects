import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoActionCreator, asyncRecieveTodos, deleteTodoActionCreator, toggleActionCreator } from "../states/todos/action";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((states) => states.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncRecieveTodos());
  }, [dispatch]);

  const onAddTodo = (text) => {
    const id = `todo-${+new Date()}`;
    dispatch(
      addTodoActionCreator({
        id,
        text,
      })
    );
  };

  const onDeleteTodo = (id) => {
    dispatch(deleteTodoActionCreator(id));
  };

  const onTogggleTodo = (id) => {
    dispatch(toggleActionCreator(id));
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
