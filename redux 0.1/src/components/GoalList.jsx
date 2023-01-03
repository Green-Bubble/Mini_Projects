import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addGoalActionCreator, asyncRecieveGoals, deleteGoalActionCreator } from "../states/goals/action";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";

const GoalList = () => {
  const goals = useSelector((states) => states.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncRecieveGoals());
  }, [dispatch]);

  const onAddGoal = (text) => {
    const id = `goal-${+new Date()}`;

    dispatch(
      addGoalActionCreator({
        id,
        text,
      })
    );
  };

  const onDeleteGoal = (id) => {
    dispatch(deleteGoalActionCreator(id));
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
