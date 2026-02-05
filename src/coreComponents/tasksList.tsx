import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import TaskItem from "./taskItem";
import useTasks from "../hooks/useTasks";

export default function TasksList() {
	const { tasks } = useTasks();

	console.log(tasks);

	return (
		<>
			<section>
				<Button icon={PlusIcon} className="w-full">
					Nova Tarefa
				</Button>
			</section>
			<section className="space-y-2">
				<TaskItem />
				<TaskItem />
				<TaskItem />
				<TaskItem />
			</section>
		</>
	);
}
