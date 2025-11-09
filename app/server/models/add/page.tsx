import { Factory } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import AddFactory from "@/components/forms/AddFactory"

export default function AddFactoryPage() {
	return (
		<ServerPageCard
			icon={Factory}
			title={"Add factory"}
			description={"Add a factory to the database."}
			btnTitle={"back"}
			href="/server/factory"
		>
			<AddFactory />
		</ServerPageCard>
	)
}
