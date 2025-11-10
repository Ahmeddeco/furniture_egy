import Link from "next/link"
import { Armchair } from "lucide-react"

export default function Logo() {
	return (
		<Link href="/" className="flex items-end gap-1">
			<Armchair className="size-7" color="var(--primary)" />
			<h3 className="tracking-wider leading-none lg:block hidden ">
				furniture
			</h3>
		</Link>
	)
}
