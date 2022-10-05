import React, { useState } from "react";
import Popup from '../components/Popup';

export default function Task(props) {
  const [editPopup, setEditPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  let isEdit = true;

  return (
    <div className=" w-5/6 max-w-[600px] flex flex-row border border-[dodgerblue] hover:border-[dodgerblue] rounded-md gap-3">
      <h3 className="text-3xl text-center text-[dodgerblue] hover:text-[dodgerblue] grow pt-3 pl-1">
        {props.title}
      </h3>
      <div className="flex flex-col gap-3 mr-1 sm:mr-5">
        <div className="flex flex-row justify-evenly pt-3">
          <button
            className="h-8 select-none aspect-square border border-transparent rounded-md flex justify-center items-center align-middle text-[#389afc] hover:bg-[#389afc] hover:text-slate-900"
            id="edit-btn"
            onClick={() => setEditPopup(true)}
          >
            <span className="material-symbols-outlined">edit</span>
          </button>
          <button
            className="h-8 select-none aspect-square border border-transparent rounded-md flex justify-center items-center align-middle text-[#6D0000] hover:bg-[#6D0000] hover:text-slate-900"
            id="delete-btn"
            onClick={() => setDeletePopup(true)}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
          <Popup trigger={editPopup} title={"Edit Task"} placeholder={"Change Task"} showInput={true} setTrigger={setEditPopup} />
          <Popup trigger={deletePopup} title={"Are you sure you want to delete this task?"} placeholder={"Change Task"} showInput={false} setTrigger={setDeletePopup} />
        </div>
        <p className=" text-[dodgerblue] hover:text-[dodgerblue] pr-3 pb-1">
          {props.date}
        </p>
      </div>
    </div>
  );
}
