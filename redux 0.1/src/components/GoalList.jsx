import React from "react";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";

const GoalList = () => {
  const goals = []; //TODO: Get goals from store

  const onAddGoal = (text) => {
    //TODO: dispatch from ADD_GOAL
  };

  const onDeleteGoal = (id) => {
    //TODO: dispatch from DELETE_GOAL
  };

  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal} />

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem {...goal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
