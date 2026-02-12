import { type Task, TASKS_KEY, TaskState } from "../models/task";

import { useLocalStorage } from "usehooks-ts";

export default function useTasks() {
	const [tasks, setTasks, removeTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

	return {
		tasks,
		tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
		concludedTasksCount: tasks.filter((task) => task.concluded).length,
	};
}
