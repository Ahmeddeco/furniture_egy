import ServerPageCard from "@/components/shared/ServerPageCard"
import { PlusCircle, Shapes } from "lucide-react"

export default function ModelsPage() {
	return (
		<ServerPageCard
			icon={PlusCircle}
			title={"all models"}
			description={"All models in the database."}
			btnTitle={"add model"}
			href={"/server/models/add"}
		>
			<h1>Reviews Page</h1>
		</ServerPageCard>
	)
}
