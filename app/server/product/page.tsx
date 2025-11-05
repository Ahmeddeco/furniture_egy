import { isAdmin } from "@/functions/isAdmin"

export default async function ProductPage() {
	await isAdmin()

	return <h1>Welcome to Productpage!</h1>
}
