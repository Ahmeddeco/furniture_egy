import { Card, CardContent } from "@/components/ui/card"
import { categoriesConstant } from "@/constants/homePage"
import CategorySchema from "@/generated/inputTypeSchemas/CategorySchema"
import Image from "next/image"
import Link from "next/link"

export default function Categories() {
	return (
		<section className="container mx-auto">
			<h2>browse our categories</h2>
			<h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis repellat doloribus vero.</h6>
			{/* ------------------------------- cards ------------------------------ */}
			<div className="flex flex-wrap items-center justify-center gap-8">
				{categoriesConstant.map(({ image, name }, index) => (
					<Link href={`/shop?category=${name}`} key={index} className="hover:scale-105 duration-700 ease-in-out">
						<Card className="w-xs px-0 pt-0 ">
							<CardContent className=" relative aspect-square w-full">
								<Image src={image} alt={name} fill className="object-cover rounded-t-lg" />
							</CardContent>
							<h4 className="text-center">{name}</h4>
						</Card>
					</Link>
				))}
			</div>
		</section>
	)
}
