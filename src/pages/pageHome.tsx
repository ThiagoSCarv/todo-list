import Container from "../components/container";
import TaskItem from "../coreComponents/taskItem";
import TasksList from "../coreComponents/tasksList";
import TasksSummary from "../coreComponents/tasksSummary";

export default function PageHome() {
	return (
		<Container as="article" className="space-y-3">
			<header className="flex items-center justify-between">
				<TasksSummary />
			</header>
			<TasksList />
		</Container>
	);
}
