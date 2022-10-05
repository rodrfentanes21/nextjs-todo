import React, { useState } from "react";

export default function Popup(props) {

  return props.trigger ? (
    <div>
      <div className=" fixed top-0 left-0 w-[100%] h-screen bg-transparent backdrop-blur-sm flex flex-col justify-center items-center align-middle">
        <div className="w-[80%] max-w-[640px] bg-slate-900 aspect-[5/2] border border-[dodgerblue] rounded-md text-[dodgerblue] text-lg flex flex-col justify-center align-middle items-center gap-3">
          <h4 className="text-2xl">{props.title}</h4>
          {
            props.showInput ? (
              <input type='text' name='editTask' id='editTask' placeholder={props.placeholder} className="w-5/6 focus:outline-none border border-[dodgerblue] rounded-md pt-1 pb-1 text-center text-[dodgerblue] bg-slate-800 placeholder:text-[#5994cf]" />
            ) : ""
          }
          <div className="w-1/2 flex flex-row justify-around pt-3">
            <button className="border border-[dodgerblue] rounded-md px-2 py-1 hover:bg-[dodgerblue] hover:text-slate-900">
              Confirm
            </button>
            <button className=" border border-[dodgerblue] rounded-md px-2 py-1 hover:bg-[dodgerblue] hover:text-slate-900" onClick={() => props.setTrigger(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
