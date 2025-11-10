import { CircleChevronLeft } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import AddProduct from "@/components/forms/AddProduct"
import { getAllFactoryForDropdown } from "@/dl/factoryData"
import { getAllSellersForDropdown } from "@/dl/userData"
import { getAllStylesForDropdown } from "@/dl/styleData"

export default async function AddFactoryPage() {
	const factories = await getAllFactoryForDropdown()
	const users = await getAllSellersForDropdown()
	const styles=await getAllStylesForDropdown()


	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"Add product"}
			description={"Add a product to the database."}
			btnTitle={"back"}
			href="/server/products"
		>
			<AddProduct factories={factories} users={users}styles={styles} />
		</ServerPageCard>
	)
}
