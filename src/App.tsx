import { Text } from "./components/text";
import Icon from "./components/icon";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import SpinIcon from "./assets/icons/Spinner.svg?react";
import Badge from "./components/badge";

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
		</div>
	);
}

export default App;
