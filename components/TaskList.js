import React from "react";
import Task from "./Task";

export default function TaskList(props) {
  if (props.items.length === 0) {
    return (
      <div>
        <h2 className="text-4xl pt-32 text-[dodgerblue]">
          No tasks registered so far.
        </h2>
        <p className="pt-5 text-md text-center text-sky-800">Use the card above to add and track new tasks.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen align-middle justify-center text-center gap-4">
      <h2 className="text-3xl text-[dodgerblue]">Pending</h2>
      <ul className="flex flex-col w-screen max-w[600px] gap-5 justify-center align-middle text-center items-center">
        {props.items.map((task) => (
          <Task key={task.id} title={task.title} date={task.date} />
        ))}
      </ul>
    </div>
  );
}
