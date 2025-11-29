import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Hero() {
	return (
		<section className="bg-[url('/images/heroImage.webp')] bg-no-repeat bg-cover lg:bg-bottom-right bg-center h-dvh  relative ">
			<Card className="absolute bg-secondary  h-fit lg:right-12 top-1/2 bottom-1/2 max-w-xs lg:max-w-lg ">
				<CardContent className="flex flex-col  gap-4">
					<h4 className=" text-start">new arrival</h4>
					<h2 className="uppercase text-start ">
						discover our <br />
						new collection
					</h2>
					<h6 className=" text-start">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore laudantium dolorem, eaque corrupti
						vel adipisci excepturi aspernatur omnis modi .
					</h6>
					<Button asChild>
						<Link href={"/shop"}>buy now</Link>
					</Button>
				</CardContent>
			</Card>
		</section>
	)
}
