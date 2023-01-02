const mockAPI = (() => {
  let todos = getTodosFromStorage() || [
    {
      id: "todo-1664268511621",
      text: "Mencuci sepeda motor",
      complete: false,
    },
    {
      id: "todo-1664268553422",
      text: "Menjenput adik sekolah",
      complete: false,
    },
  ];

  let goals = getGoalsFromStorage() || [
    {
      id: "goal-1664268511621",
      text: "Belajar-React",
    },
    {
      id: "goal-1664268511622",
      text: "Belajar-Redux",
    },
  ];

  const saveTodosToStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const saveGoalsToStorage = () => {
    localStorage.setItem("goals", JSON.stringify(goals));
  };

  const getTodosFromStorage = () => {
    const todos = localStorage.getItem("todos");

    if (!todos) {
      return null;
    }

    return JSON.stringify(todos);
  };

  const getGoalsFromStorage = () => {
    const goals = localStorage.getItem("goals");

    if (!goals) {
      return null;
    }

    return JSON.stringify(goals);
  };

  const mockRequest = (action) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(action());
      }, 1000);
    });
  };

  const addTodo = (text) => {
    return mockRequest(() => {
      const newTodo = {
        id: `todo-${+new Date()}`,
        text,
        complete: false,
      };

      todos = [...todos, newTodo];

      saveTodosToStorage();

      return newTodo;
    });
  };

  const getTodos = () => {
    return mockRequest(() => {
      return JSON.parse(JSON.stringify(todos));
    });
  };

  const deleteTodos = (id) => {
    return mockRequest(() => {
      const todoToBeDeleted = todos.find((todo) => todo.id === id);

      if (todoToBeDeleted.complete) {
        todos = todos.filter((todo) => todo.id != id);
        saveTodosToStorage();
      }
    });
  };

  const toggleTodo = (id) => {
    return mockRequest(() => {
      todos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }

        return todo;
      });

      saveTodosToStorage();
    });
  };

  const addGoal = (text) => {
    return mockRequest(() => {
      const newGoal = {
        id: `goal-${+new Date()}`,
        text,
      };

      goals = [...goals, newGoal];

      saveGoalsToStorage();

      return newGoal;
    });
  };

  const getGoals = (id) => {
    return mockRequest(() => {
      return JSON.parse(JSON.stringify(goals));
    });
  };

  const deleteGoal = (id) => {
    return mockRequest(() => {
      goals = goals.filter((goal) => goal.id === id);
      saveGoalsToStorage();
    });
  };

  return { addTodo, getTodos, deleteTodos, toggleTodo, addGoal, getGoals, deleteGoal };
})();

export default mockAPI;
