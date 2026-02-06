import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import TaskItem from "./taskItem";
import useTasks from "../hooks/useTasks";
import useTask from "../hooks/useTask";
import { TaskState } from "../models/task";

export default function TasksList() {
	const { tasks } = useTasks();
	const { prepareTask } = useTask();

	function handleNewTask() {
		prepareTask();
	}

	return (
		<>
			<section>
				<Button
					icon={PlusIcon}
					disabled={tasks.some((task) => task.state === TaskState.Creating)}
					className="w-full"
					onClick={handleNewTask}
				>
					Nova Tarefa
				</Button>
			</section>
			<section className="space-y-2">
				{tasks.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</section>
		</>
	);
}
