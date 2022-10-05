import Head from "next/head";
import Link from "next/link";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";
import { useState } from "react";

const Dummy_Tasks = [
  {
    id: 't1',
    title: 'Study Next.js',
    date: '3/3/2022'
  },
  {
    id: 't2',
    title: 'item 2',
    date: '4/3/2022'
  },
  {
    id: 't3',
    title: 'item 3',
    date: '4/3/2022'
  },
  {
    id: 't4',
    title: 'item 4',
    date: '4/3/2022'
  },
  {
    id: 't5',
    title: 'item 5',
    date: '4/3/2022'
  },
  {
    id: 't6',
    title: 'item 6',
    date: '4/3/2022'
  },
  {
    id: 't7',
    title: 'item 7',
    date: '4/3/2022'
  }
]

export default function Home() {
  const [tasks, setTasks] = useState(Dummy_Tasks);

  return (
    <div className="container">
      <Head>
        <title>Next.js To do App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>

      <main className="w-screen h-max min-h-screen bg-slate-900 flex flex-col align-middle items-center py-20">
        <div className="w-screen text-center">
          <h1 className="text-6xl pt-5 text-[dodgerblue]">Next.js To do App</h1>
        </div>
        <div className="w-screen max-w-[600px] flex flex-col justify-center items-center align-middle gap-5 pt-20">
          <AddTask />
          <TaskList items={tasks} />
        </div>
      </main>
    </div>
  );
}
