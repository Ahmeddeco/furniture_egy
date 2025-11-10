import { isSeller } from "@/functions/isSeller"

export default async function ServerPage() {
	await isSeller()
	return <h1>ServerPage</h1>
}
