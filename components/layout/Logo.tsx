import Image from "next/image"
import Link from "next/link"
import logoIcon from "../../public/icons/logo.webp"

export default function Logo() {
	return (
		<Link href="/" className="flex items-end gap-1">
			<Image src={logoIcon} alt={"logo"} />
			<h2 className="tracking-wider leading-none lg:block hidden">furniture</h2>
		</Link>
	)
}
