import { CircleChevronLeft, UserRoundX } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EditUser from "@/components/forms/EditUser"
import { getOneUser } from "@/dl/user"
import EmptyCard from "@/components/shared/EmptyCard"

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	const user = await getOneUser(id)

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit User"}
			description={"edit a user to the database."}
			btnTitle={"back"}
			href="/server/user"
		>
			{!user?.data ? (
				<EmptyCard href={"/server/user"} linkTitle={"no user found"} linkIcon={UserRoundX} />
			) : (
				<EditUser data={user.data} />
			)}
		</ServerPageCard>
	)
}
