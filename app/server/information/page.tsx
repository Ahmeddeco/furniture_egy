import { isSeller } from "@/functions/isSeller"
// TODO Only display the information of the current seller
export default async function InformationPage() {
  await isSeller()
  return <h1>Welcome to Information page!</h1>;
}