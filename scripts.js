const allTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Function to add a new task to the allTasks array
function addTask() {
  let newTask = {};

  newTask.id = allTasks.length + 1;
  newTask.title = prompt("Enter Task Title:");
  newTask.description = prompt("Enter Task Description:");

  const validStatuses = ["todo", "doing", "done"];

  // Loop to make sure the entered status is valid
  do {
    newTask.status = prompt("Enter Task Status:").toLowerCase();

    if (!validStatuses.includes(newTask.status)) {
      alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
    }

  } while (!validStatuses.includes(newTask.status));

  // Adds new task to end of the main task array based on info entered above
  allTasks.push(newTask);
}

// Lets user add new tasks until there are either 6 tasks on the list or they cancel out
while (allTasks.length < 6 && confirm("Would you like to add a new task?")) {
  addTask();
}

// Lets the user know when their task board is full
if (allTasks.length >= 6) {
  alert(
    "There are enough tasks on your board, please check them in the console.",
  );
}

// Filters out all completed tasks (status = done) and assigns them to their own array
const tasksDone = allTasks.filter((task) => task.status === "done");

console.log("All Tasks:", allTasks);
console.log("Completed Tasks:", tasksDone);
