import { isAdmin } from "@/functions/isAdmin"

export default async function AdminPage() {
  await isAdmin()
  return <h1>Welcome to Adminpage!</h1>;
}