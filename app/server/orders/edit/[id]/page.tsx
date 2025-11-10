import {  CircleChevronLeft, Factory } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import { getOneFactory } from "@/dl/factoryData"
import EditFactory from "@/components/forms/EditFactory"

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	const factory = await getOneFactory(id)

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit factory"}
			description={"edit a factory to the database."}
			btnTitle={"back"}
			href="/server/factory"
		>
			{!factory?.data ? (
				<EmptyCard href={"/server/factory"} linkTitle={"no factory found"} linkIcon={Factory} />
			) : (
				<EditFactory data={factory.data} />
			)}
		</ServerPageCard>
	)
}
