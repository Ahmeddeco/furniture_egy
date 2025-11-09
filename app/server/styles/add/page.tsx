import { Factory } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import AddStyle from "@/components/forms/AddStyle"

export default function AddFactoryPage() {
	return (
		<ServerPageCard
			icon={Factory}
			title={"Add style"}
			description={"Add a style to the database."}
			btnTitle={"back"}
			href="/server/styles"
		>
			<AddStyle />
		</ServerPageCard>
	)
}
