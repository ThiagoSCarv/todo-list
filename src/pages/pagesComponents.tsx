import { Text } from "../components/text";
import Icon from "../components/icon";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import SpinIcon from "../assets/icons/Spinner.svg?react";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import Button from "../components/button";
import Badge from "../components/badge";
import ButtonIcon from "../components/buttonIcon";
import InputText from "../components/input-text";
import InputCheckbox from "../components/checkBox";
import Card from "../components/card";
import Container from "../components/container";
import Skeleton from "../components/skeleton";

export default function PageComponents() {
	return (
		<Container>
			<div className="flex flex-col gap-3.5 text-pink-base">
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

				<div className="flex gap-1,">
					<Badge variant="secondary">5</Badge>
					<Badge variant="primary">2 de 5</Badge>
					<Badge loading>5</Badge>
				</div>

				<div>
					<Button icon={PlusIcon}>Nova Tarefa</Button>
					<Button icon={PlusIcon} loading>
						Nova Tarefa
					</Button>
				</div>

				<div className="flex gap-1">
					<ButtonIcon icon={TrashIcon} />
					<ButtonIcon icon={TrashIcon} variant="secondary" />
					<ButtonIcon icon={TrashIcon} variant="tertiary" />
					<ButtonIcon icon={TrashIcon} loading variant="secondary" />
				</div>

				<div>
					<InputText placeholder="Digite uma tarefa" />
				</div>

				<div>
					<InputCheckbox />
					<InputCheckbox loading />
				</div>

				<div>
					<Card size="md">Olá Mundo</Card>
				</div>
			</div>
			<div className="space-y-2">
				<Skeleton className="h-6" />
				<Skeleton className="h-6" />
				<Skeleton className="w-96 h-6" />
			</div>
		</Container>
	);
}
