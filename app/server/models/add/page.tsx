import { CircleChevronLeft } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import AddFactory from "@/components/forms/AddFactory"
import AddModel from "@/components/forms/AddModel"
import { AllFactoriesForModel, AllStylesForModel, getAllFactoriesForModel, getAllStylesForModel } from "@/dl/modelData"

export default async function AddFactoryPage() {
	const factories: AllFactoriesForModel = await getAllFactoriesForModel()
	const styles: AllStylesForModel = await getAllStylesForModel()

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"Add model"}
			description={"Add a model to the database."}
			btnTitle={"back"}
			href="/server/models"
		>
			<AddModel factories={factories} styles={styles} />
		</ServerPageCard>
	)
}
