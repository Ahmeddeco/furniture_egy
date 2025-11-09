import ServerPageCard from "@/components/shared/ServerPageCard"
import { isAdmin } from "@/functions/isAdmin"
import { PlusCircle } from "lucide-react"

export default async function ProductPage() {
	await isAdmin()

	return (
		<ServerPageCard
			icon={PlusCircle}
			title={"all products"}
			description={"All products in the database."}
			btnTitle={"add product"}
			href={"/server/products/add"}
		>
			<h1>ProductPage</h1>
		</ServerPageCard>
	)
}
