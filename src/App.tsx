import { Text } from "./components/text";
import Icon from "./components/icon";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import SpinIcon from "./assets/icons/Spinner.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import Button from "./components/button";
import Badge from "./components/badge";
import ButtonIcon from "./components/buttonIcon";

function App() {
	return (
		<div className="text-pink-base">
			<Text className="text-pink-base" variant="body-sm">
				Hello World!!
			</Text>
			<Text className="text-gray-400" variant="body-md-regular">
				Hello World!!
			</Text>
			<Text className="text-gray-200" variant="body-md-semibold">
				Hello World!!
			</Text>
			<div>
				<Icon svg={TrashIcon} className="fill-pink-dark" />
				<Icon svg={SpinIcon} className="fill-green-dark" />
			</div>

			<div>
				<Badge variant="secondary">5</Badge>
				<Badge variant="primary">2 de 5</Badge>
			</div>

			<div>
				<Button icon={PlusIcon}>Nova Tarefa</Button>
			</div>

			<div className="flex gap-1">
				<ButtonIcon icon={TrashIcon} />
				<ButtonIcon icon={TrashIcon} variant="secondary" />
				<ButtonIcon icon={TrashIcon} variant="tertiary" />
			</div>
		</div>
	);
}

export default App;
