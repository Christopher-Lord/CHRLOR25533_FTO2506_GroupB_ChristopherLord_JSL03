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

function addTask() {
  let task = {};

  task.id = allTasks.length + 1;
  task.title = prompt("Enter Task Title:");
  task.description = prompt("Enter Task Description:");

  const validStatuses = ["todo", "doing", "done"];

  do {
    task.status = prompt("Enter Task Status:").toLowerCase();

    if (!validStatuses.includes(task.status)) {
      alert("Invalid status. Please enter 'todo', 'doing' or 'done'.");
    }
    
  } while (!validStatuses.includes(task.status));

  allTasks.push(task);
}

while (allTasks.length < 6 && confirm("Would you like to add a new task?")) {
  addTask();
}

if (allTasks.length >= 6) {
  alert(
    "There are enough tasks on your board, please check them in the console.",
  );
}

const tasksDone = allTasks.filter((task) => task.status === "done");

console.log("All Tasks:", allTasks);
console.log("Completed Tasks:", tasksDone);