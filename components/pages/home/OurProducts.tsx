import EmptyCard from "@/components/shared/EmptyCard"
import ProductCard from "@/components/shared/ProductCard"
import { getLatestProduct } from "@/dl/productData"
import { Armchair } from "lucide-react"

export default async function OurProducts() {
	const data = await getLatestProduct()

	return (
		<section>
			<h2>OurProducts</h2>
			<div className="flex flex-wrap items-center justify-center gap-4">
				{!data || data.length < 1 ? (
					<EmptyCard href={"/server/products/add"} linkTitle={"add product"} linkIcon={Armchair} />
				) : (
					data?.map((product) => <ProductCard key={product.id} data={product} />)
				)}
			</div>
		</section>
	)
}
