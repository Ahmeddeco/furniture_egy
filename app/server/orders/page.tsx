import ServerPageCard from "@/components/shared/ServerPageCard"
import { PlusCircle } from "lucide-react"

export default function OrdersPage() {
	return (
		<ServerPageCard
			icon={PlusCircle}
			title={"all orders"}
			description={"All orders made in for all sellers."}
			btnTitle={"add user"}
			href={"/server/user/add"}
		>
			<h1>Orders Page</h1>
		</ServerPageCard>
	)
}
