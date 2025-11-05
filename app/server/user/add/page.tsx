import AddUser from "@/components/forms/AddUser"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CircleChevronLeft } from "lucide-react"
import Link from "next/link"
import ServerPage from "../../page"
import ServerPageCard from "@/components/shared/ServerPageCard"

export default function AddUserPage() {
	return (
		// <Card>
		// 	<CardHeader>
		// 		<CardTitle>Add User</CardTitle>
		// 		<CardDescription>Add a user to the database.</CardDescription>
		// 		<CardAction>
		// 			<Button asChild size={"sm"}>
		// 				<Link href={"/server/user"}>
		// 					<CircleChevronLeft />
		// 					back
		// 				</Link>
		// 			</Button>
		// 		</CardAction>
		// 	</CardHeader>
		// 	<Separator />
		// 	<CardContent>
		// 		<AddUser />
		// 	</CardContent>
		// </Card>

		<ServerPageCard
			icon={CircleChevronLeft}
			title={"Add User"}
			description={"Add a user to the database."}
			btnTitle={"back"}href="/server/user"
		>
			<AddUser />
		</ServerPageCard>
	)
}
