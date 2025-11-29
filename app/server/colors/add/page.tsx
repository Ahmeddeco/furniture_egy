import { Palette } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import AddFactory from "@/components/forms/AddFactory"
import AddColor from "@/components/forms/AddColor"

export default function AddColorPage() {
	return (
		<ServerPageCard
			icon={Palette}
			title={"Add Color"}
			description={"Add a Color to the database."}
			btnTitle={"back"}
			href="/server/colors"
		>
			<AddColor />
		</ServerPageCard>
	)
}
