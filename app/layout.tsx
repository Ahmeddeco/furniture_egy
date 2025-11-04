import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

import localFont from "next/font/local"
import { Toaster } from "@/components/ui/sonner"
import { CircleAlert, CircleCheckBig, CircleX } from "lucide-react"

const arimo = localFont({
	src: "../public/fonts/Arimo.ttf",
})

export const metadata: Metadata = {
	title: "Furniture",
	description: "Furniture Web E-commerce App.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${arimo.className}  antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className="min-h-dvh pt-12 lg:pt-14 px-4">{children}</main>
					<Toaster
						theme="system"
						richColors
						duration={5000}
						icons={{
							success: <CircleCheckBig />,
							warning: <CircleAlert />,
							error: <CircleX />,
						}}
					/>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
