import { CircleChevronLeft, Shapes } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import {
	AllFactoriesForModel,
	AllStylesForModel,
	getAllFactoriesForModel,
	getAllStylesForModel,
	getOneModel,OneModel
} from "@/dl/model"
import EditModel from "@/components/forms/EditModel"

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	const model:OneModel = await getOneModel(id)
	
	const factories: AllFactoriesForModel = await getAllFactoriesForModel()
	const styles: AllStylesForModel = await getAllStylesForModel()
	

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit model"}
			description={"edit a model to the database."}
			btnTitle={"back"}
			href="/server/models"
		>
			{!model ? (
				<EmptyCard href={"/server/models"} linkTitle={"no model found"} linkIcon={Shapes} />
			) : (
				<EditModel data={model} factories={factories} styles={styles} />
			)}
		</ServerPageCard>
	)
}
