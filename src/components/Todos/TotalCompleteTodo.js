import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const { todos, error } = useSelector((state) => state.todos);
  return (
    !error && (
      <h4 className="mt-3">
        Total Complete Items: {todos.filter((t) => t.completed).length}
      </h4>
    )
  );
};

export default TotalCompleteItems;
