"use client"

import { frontNavLinks } from "@/constants/nav"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function FrontNavigation() {
	const pathName = usePathname()

	return (
		<>
			{frontNavLinks.map((link) => (
				<Link
					key={link.title}
					href={link.href}
					className={`${pathName === link.href ? "underline-offset-8 underline font-extrabold" : "font-medium"}  capitalize`}
				>
					{link.title}
				</Link>
			))}
		</>
	)
}
