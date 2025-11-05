import { isAdmin } from "@/functions/isAdmin"
import { PlusCircle } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"

export default async function UsersPage() {
	await isAdmin()

	return (
		<ServerPageCard
			icon={PlusCircle}
			title={"all users"}
			description={"All users in the database."}
			btnTitle={"add user"}
			href={"/server/user/add"}
		>
			<h2>UsersPage</h2>
		</ServerPageCard>
	)
}
