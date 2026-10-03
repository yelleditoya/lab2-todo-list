import { useState } from "react";

function App() {
  // Store tasks
  const [tasks, setTasks] = useState([]);

  // Store input
  const [taskInput, setTaskInput] = useState("");

  // Add task
  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  // Mark task Done / Not Done
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear all tasks
  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">

      {/* Main Container */}
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-blue-600">
            My To-Do List
          </h1>

          <p className="mt-2 text-gray-600">
            Organize your tasks easily
          </p>
        </div>

        {/* Add Task */}
        <div className="rounded-lg bg-white p-5 shadow">

          <h2 className="mb-3 text-xl font-semibold">
            Add a Task
          </h2>

          <div className="flex flex-col gap-2 sm:flex-row">

            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
              placeholder="Enter your task..."
              className="flex-1 rounded border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            />

            <button
              onClick={addTask}
              className="rounded bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Add Task
            </button>

          </div>
        </div>

        {/* Task List */}
        <div className="mt-6 rounded-lg bg-white p-5 shadow">

          <div className="mb-4 flex items-center justify-between">

            <h2 className="text-xl font-semibold">
              My Tasks
            </h2>

            <button
              onClick={clearTasks}
              className="rounded bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-600"
            >
              Clear All
            </button>

          </div>

          {/* Show message if no tasks */}
          {tasks.length === 0 ? (
            <p className="py-6 text-center text-gray-500">
              No tasks yet. Add your first task!
            </p>
          ) : (

            <div className="space-y-3">

              {tasks.map((task) => (

                <div
                  key={task.id}
                  className="flex flex-col gap-3 rounded border p-4 sm:flex-row sm:items-center sm:justify-between"
                >

                  {/* Task Text */}
                  <span
                    className={
                      task.completed
                        ? "text-gray-400 line-through"
                        : "text-gray-800"
                    }
                  >
                    {task.text}
                  </span>

                  {/* Buttons */}
                  <div className="flex gap-2">

                    <button
                      onClick={() => toggleTask(task.id)}
                      className="rounded bg-green-500 px-3 py-2 text-sm text-white hover:bg-green-600"
                    >
                      {task.completed ? "Not Done" : "Done"}
                    </button>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="rounded bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

        {/* Instructions */}
        <div className="mt-6 rounded-lg bg-white p-5 shadow">

          <h2 className="mb-4 text-xl font-semibold text-blue-600">
            Instructions / User Guide
          </h2>

          <div className="space-y-3 text-gray-700">

            <p>
              <strong>1. How to add a task:</strong>
              <br />
              Type your task in the input box and click
              <b> Add Task</b>.
            </p>

            <p>
              <strong>2. How to mark a task as Done:</strong>
              <br />
              Click the <b>Done</b> button beside the task.
            </p>

            <p>
              <strong>3. How to mark a task as Not Done:</strong>
              <br />
              Click the <b>Not Done</b> button again.
            </p>

            <p>
              <strong>4. How to delete a task:</strong>
              <br />
              Click the <b>Delete</b> button.
            </p>

          </div>

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Laboratory 2 - DCIT 26
        </p>

      </div>

    </div>
  );
}

export default App;