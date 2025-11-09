import ServerPageCard from "@/components/shared/ServerPageCard"
import { isAdmin } from "@/functions/isAdmin"
import { CircleArrowLeft, PlusCircle, Server } from "lucide-react"

export default async function ServerPage() {
	await isAdmin()

	return (
		<ServerPageCard
			icon={CircleArrowLeft}
			title={"ServerPage"}
			description={"Server Page."}
			btnTitle={"add Server"}
			href={"/server/user/add"}
		>
			<h1>ServerPage</h1>
		</ServerPageCard>
	)
}
