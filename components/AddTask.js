import React, { useState } from "react";
import { handler } from "../pages/api/api";

export default function AddTask() {
  const [isNewTask, setIsNewTask] = useState(false);
  const [NewTaskTitle, setNewTaskTitle] = useState("");
  const [NewTaskDate, setNewTaskDate] = useState("");

  const addTaskChangeHandler = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const addDateChangeHandler = (event) => {
    setNewTaskDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!NewTaskDate) {
      NewTaskDate = new Date();
    }

    const newTaskData = {
      title: NewTaskTitle,
      date: new Date(NewTaskDate),
    };

    console.log(newTaskData);

    setNewTaskTitle("");
    setNewTaskDate("");
  };

  return (
    <div className="w-[90%] border border-[dodgerblue] rounded-md">
      {isNewTask ? (
        <form onSubmit={submitHandler} className="flex flex-row w-[100%] justify-end pr-5 items-center align-middle gap-3 ms:gap-5">
          <div className="grow pl-10 flex flex-col gap-5 pt-5 pb-5">
            <input
              type="text"
              onChange={addTaskChangeHandler}
              value={NewTaskTitle}
              name="newTask"
              id="newTask"
              placeholder="Add a New Task"
              required
              className="focus:outline-none border border-[dodgerblue] rounded-md w-[100%] pt-1 pb-1 text-center text-[dodgerblue] placeholder:text-[#5994cf] bg-slate-800 grow"
            />
            <input
              type="date"
              onChange={addDateChangeHandler}
              value={NewTaskDate}
              name="newTaskDate"
              id="newTaskDate"
              min={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]}
              className="focus:outline-none border border-[dodgerblue] rounded-md pt-1 pb-1 sm:px-3 text-center text-[#5994cf] bg-slate-800"
            />
          </div>
          <button
            type="submit"
            className="h-8 select-none aspect-square border border-transparent rounded-xl pt-6 pb-6 flex justify-center items-center align-middle text-[dodgerblue] hover:bg-[dodgerblue] hover:text-slate-900"
          >
            <span className="material-symbols-outlined">add</span>
          </button>
          <button
            className=" border border-[dodgerblue] text-[dodgerblue] rounded-xl p-3 mt-5 mb-5 hover:bg-[dodgerblue] hover:text-slate-900"
            onClick={() => setIsNewTask(!isNewTask)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className="flex w-[100%] justify-end pr-5 items-center align-middle">
          <button
            className=" border border-[dodgerblue] text-[dodgerblue] rounded-xl p-3 mt-5 mb-5 hover:bg-[dodgerblue] hover:text-slate-900"
            onClick={() => setIsNewTask(!isNewTask)}
          >
            Add Task
          </button>
        </div>
      )}
    </div>
  );
}
