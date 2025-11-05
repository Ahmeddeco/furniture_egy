import { isAdmin } from "@/functions/isAdmin"

export default async function ColorPage() {
	await isAdmin()

	return <h1>Welcome to Colorpage!</h1>
}
