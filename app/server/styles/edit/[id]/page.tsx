import { CircleChevronLeft, Factory } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import { getOneFactory } from "@/dl/factory"
import EditFactory from "@/components/forms/EditFactory"
import EditStyle from "@/components/forms/EditStyle"
import { getOneStyle } from "@/dl/style"

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	const style = await getOneStyle(id)

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit style"}
			description={"edit a style to the database."}
			btnTitle={"back"}
			href="/server/styles"
		>
			{!style?.data ? (
				<EmptyCard href={"/server/styles"} linkTitle={"no styles found"} linkIcon={Factory} />
			) : (
				<EditStyle data={style.data} />
			)}
		</ServerPageCard>
	)
}
