"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };
  let renderTask = <h2 className="text-xl font-semibold">No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex item-center justify-between mb-8">
          <div className="flex justify-between items-center mb-5 w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-blue-700 text-black p-5 text-5xl text-center font-light">
        🏢 My Todo List 📝
      </h1>
      <form onSubmit={submitHandler} className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <input
          type="text"
          className="text-2xl border-black border-4 m-4 px-4 py-2"
          placeholder="Enter your task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-black border-4 m-4 px-4 py-2"
          placeholder="Enter your Description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  px-4 py-2 text-2xl font-bold  rounded">
          Add Task
        </button>
      </form>
      <hr className="m-4 "/>
      <div className="p-8 bg-slate-200 m-4">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
