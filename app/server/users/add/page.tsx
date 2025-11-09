import AddUser from "@/components/forms/AddUser"
import { CircleChevronLeft } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"

export default function AddUserPage() {
	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"Add User"}
			description={"Add a user to the database."}
			btnTitle={"back"}
			href="/server/users"
		>
			<AddUser />
		</ServerPageCard>
	)
}
