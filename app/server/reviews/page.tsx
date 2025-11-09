import ServerPageCard from "@/components/shared/ServerPageCard"
import { PlusCircle } from "lucide-react"

export default function ReviewsPage() {
	return (
		<ServerPageCard
			icon={PlusCircle}
			title={"all reviews"}
			description={"All reviews in the database."}
			btnTitle={"add review"}
			href={"/server/reviews/add"}
		>
			<h1>Reviews Page</h1>
		</ServerPageCard>
	)
}
