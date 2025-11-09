import { Armchair, CircleChevronLeft } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import { getAllFactoryForDropdown,  } from "@/dl/factoryData"
import { getOneProduct } from "@/dl/productData"
import EditProduct from "@/components/forms/EditProduct"
import { getAllSellersForDropdown } from "@/dl/userData"
import { getAllModelsForDropdown } from "@/dl/modelData"

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	const product = await getOneProduct(id)
	const factories = await getAllFactoryForDropdown()
	const users = await getAllSellersForDropdown()
	const models = await getAllModelsForDropdown()

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit factory"}
			description={"edit a factory to the database."}
			btnTitle={"back"}
			href="/server/factory"
		>
			{!product?.data ? (
				<EmptyCard href={"/server/products"} linkTitle={"go to products"} linkIcon={Armchair} />
			) : (
				<EditProduct data={product.data} factories={factories} users={users} models={models} />
			)}
		</ServerPageCard>
	)
}
