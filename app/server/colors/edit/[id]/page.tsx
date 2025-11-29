import { CircleChevronLeft, Factory, Palette } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import { getOneFactory } from "@/dl/factoryData"
import EditFactory from "@/components/forms/EditFactory"
import { getOneColor } from "@/dl/colorData"
import EditColor from "@/components/forms/EditColor"

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	const color = await getOneColor(id)

	return (
		<ServerPageCard
			icon={CircleChevronLeft}
			title={"edit color"}
			description={"edit a color to the database."}
			btnTitle={"back"}
			href="/server/factories"
		>
			{!color?.data ? (
				<EmptyCard href={"/server/factories"} linkTitle={"no color found"} linkIcon={Palette} />
			) : (
				<EditColor data={color.data} />
			)}
		</ServerPageCard>
	)
}
