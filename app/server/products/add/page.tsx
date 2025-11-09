import { CircleChevronLeft } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import AddProduct from "@/components/forms/AddProduct"
import { getAllFactoryForDropdown } from "@/dl/factoryData"
import { getAllSellersForDropdown } from "@/dl/userData"
import { getAllModelsForDropdown } from "@/dl/modelData"

export default async function AddFactoryPage() {
	const factories = await getAllFactoryForDropdown()
	const users = await getAllSellersForDropdown()
	const models = await getAllModelsForDropdown()

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"Add product"}
			description={"Add a product to the database."}
			btnTitle={"back"}
			href="/server/products"
		>
			<AddProduct factories={factories} users={users} models={models} />
		</ServerPageCard>
	)
}
